import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import styles from "@/styles/Chart.module.css";
import Head from "next/head";
import Link from 'next/link';

const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077";
const REDIRECT_URI = "https://groove-music-app.vercel.app/stats";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "user-top-read";

export default function StatsPage() {
    const [token, setToken] = useState("");
    const [topGenres, setTopGenres] = useState([]);

    useEffect(() => {
        const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
            const parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        if (hashParams.access_token) {
            setToken(hashParams.access_token);
        }
    }, []);

    useEffect(() => {
        const fetchTopGenres = async () => {
            try {
                if (!token) return;

                const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                const genres = data.items.flatMap(artist => artist.genres);
                const genreCounts = genres.reduce((acc, genre) => {
                    acc[genre] = (acc[genre] || 0) + 1;
                    return acc;
                }, {});

                const genreArray = Object.entries(genreCounts).map(([genre, count]) => ({
                    genre,
                    count,
                }));

                const sortedGenres = genreArray.sort((a, b) => b.count - a.count);
                setTopGenres(sortedGenres.slice(0, 10));
            } catch (error) {
                console.error('Error fetching top genres:', error);
            }
        };

        fetchTopGenres();
    }, [token]);

    useEffect(() => {
        if (topGenres.length > 0) {
            renderPieChart();
        }
    }, [topGenres]);

    const renderPieChart = () => {
        const ctx = document.getElementById('myChart');
        const labels = topGenres.map(genre => genre.genre);
        const data = topGenres.map(genre => genre.count);

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels,
                datasets: [{
                    backgroundColor: [
                        'rgba(130, 143, 255, 0.5)',
                        'rgba(255, 209, 99, 0.5)',
                        'rgba(255, 138, 115, 0.5)',
                        'rgba(255, 144, 218, 0.5)',
                        'rgba(168, 135, 255, 0.5)',
                        'rgba(99, 226, 134, 0.5',
                    ],
                    data,
                    borderWidth: 1,
                }],
            },
        });
    };

    return (
        <>
            <Head>
                <title>GROOVE - STATS</title>
                <meta name="description" content="See your Top Spotify Genres!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {!token && (
                    <a className={styles.paragraph} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>
                        Login to Spotify
                    </a>
                )}
                {token && (
                    <div className={styles.main}>
                        <h1 className={styles.genresHeader}>Your Top Genres</h1>
                        <canvas 
                            className={styles.chartCanvas}
                            id="myChart"
                        ></canvas>
                        <Link
                        href="/Quiz" 
                        className={styles.buttonContainer}>Go to Tunebox</Link>
                    </div>
                )}
            </main>
        </>
    );
}