import React from "react";
import '../App.css'
const Login = ({ onLogin }) => {
    const clientId = import.meta.env.VITE_CLIENT_ID; // Replace with your actual client ID
    const redirectUri = import.meta.env.VITE_REDIRECTED_URI;
    const scopes = "user-read-private user-read-email";

    const handleLogin = () => {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scopes)}`;
        window.location.href = authUrl; // Redirect to Spotify's authorization page
    };

    return (
        <div>
            <header class="fixed w-full">
                <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="/" class="flex items-center">
                            <img src="https://demo.themesberg.com/landwind/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mood Music</span>
                        </a>
                        <div class="flex items-center lg:order-2">
                        <button onClick={handleLogin}
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg 
                                        width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        shape-rendering="geometricPrecision" 
                                        text-rendering="geometricPrecision" 
                                        image-rendering="optimizeQuality" 
                                        fill-rule="evenodd" clip-rule="evenodd" 
                                        viewBox="0 0 512 511.991">
                                            <path fill="#fff" fill-rule="nonzero" d="M255.998.003C114.616.003 0 114.616 0 255.997c0 141.385 114.616 255.994 255.998 255.994C397.395 511.991 512 397.386 512 255.997 512 114.624 397.395.015 255.994.015l.004-.015v.003zm117.4 369.22c-4.585 7.519-14.427 9.908-21.949 5.288-60.104-36.714-135.771-45.027-224.882-24.668-8.587 1.954-17.146-3.425-19.104-12.015-1.967-8.591 3.394-17.15 12.003-19.104 97.518-22.28 181.164-12.688 248.645 28.55 7.522 4.616 9.907 14.427 5.288 21.95l-.001-.001zm31.335-69.703c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.298-173.703-54.548-255.096-29.837-10.556 3.187-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.891 92.971-28.208 208.551-14.546 287.574 34.015 9.385 5.779 12.35 18.067 6.575 27.441v-.004l-.004-.004zm2.692-72.584c-82.511-49.006-218.635-53.51-297.409-29.603-12.649 3.837-26.027-3.302-29.86-15.955-3.832-12.656 3.303-26.023 15.96-29.867 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.754 15.133 21.446 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.371h-.011z"/>
                                    </svg>
                                        <span className="button_text">Login to Spotify</span>
                                </button>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
                        </div>
                        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/"
                                        class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                        aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com/"
                                        target = "_blank" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Spotify
                                            </a>
                                </li>
                                <li>   
                                    <a href="https://github.com/Yugant1338/Mood-Music-Player"
                                        target = "_blank" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/yugant-chaudhury-252288248/"
                                        target = "_blank" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="bg-white dark:bg-gray-900 w-full">
                <div class="grid w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="ml-5 mr-auto place-self-center lg:col-span-7">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Grove into Music
                            </h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to Mood Music Player – 
                                an innovative app that curates personalized playlists based on your current mood. 
                                Answer a quick questionnaire, let our AI analyze your responses, and discover the perfect genre and playlists to match your vibe. 
                                Dive into a unique listening experience tailored just for you.
                                </p>
                            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                 <a href="https://github.com/Yugant1338/Mood-Music-Player" target="_blank">
                                 <button
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg 
                                        width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        shape-rendering="geometricPrecision" 
                                        text-rendering="geometricPrecision" 
                                        image-rendering="optimizeQuality" 
                                        fill-rule="evenodd" clip-rule="evenodd" 
                                        viewBox="0 0 512 499.368">
                                        <path fill="#fff" 
                                            fill-rule="nonzero" 
                                            d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>
                                    </svg>
                                    <span className="button_text">View on GitHub</span>
                                </button>
                                 </a>

                                
                                <button onClick={handleLogin}
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg 
                                        width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        shape-rendering="geometricPrecision" 
                                        text-rendering="geometricPrecision" 
                                        image-rendering="optimizeQuality" 
                                        fill-rule="evenodd" clip-rule="evenodd" 
                                        viewBox="0 0 512 511.991">
                                            <path fill="#fff" fill-rule="nonzero" d="M255.998.003C114.616.003 0 114.616 0 255.997c0 141.385 114.616 255.994 255.998 255.994C397.395 511.991 512 397.386 512 255.997 512 114.624 397.395.015 255.994.015l.004-.015v.003zm117.4 369.22c-4.585 7.519-14.427 9.908-21.949 5.288-60.104-36.714-135.771-45.027-224.882-24.668-8.587 1.954-17.146-3.425-19.104-12.015-1.967-8.591 3.394-17.15 12.003-19.104 97.518-22.28 181.164-12.688 248.645 28.55 7.522 4.616 9.907 14.427 5.288 21.95l-.001-.001zm31.335-69.703c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.298-173.703-54.548-255.096-29.837-10.556 3.187-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.891 92.971-28.208 208.551-14.546 287.574 34.015 9.385 5.779 12.35 18.067 6.575 27.441v-.004l-.004-.004zm2.692-72.584c-82.511-49.006-218.635-53.51-297.409-29.603-12.649 3.837-26.027-3.302-29.86-15.955-3.832-12.656 3.303-26.023 15.96-29.867 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.754 15.133 21.446 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.371h-.011z"/>
                                    </svg>
                                        <span className="button_text">Sign Up / Login</span>
                                </button>
                            </div>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image"/>
            </div>
                    </div>
            </section>

            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Affordable plans for any situations</h2>
                        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime.</p>
                    </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div
                            class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Student</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Cost saving for students.</p>
                            <div class="flex items-baseline justify-center my-8">
                                <span class="mr-2 text-5xl font-extrabold">₹59</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>1 Premium Account</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Cancel Anytime</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Subscribe or one-time payment</span>
                                </li>
                            </ul>
                            <a href="https://www.spotify.com/in-en/premium/"
                                class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                                started</a>
                        </div>
                        <div
                            class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Individual</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use.</p>
                            <div class="flex items-baseline justify-center my-8">
                                <span class="mr-2 text-5xl font-extrabold">₹119</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>1 Premium Account</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Cancel Anytime</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Subscribe or one-time payment</span>
                                </li>
                            </ul>
                            <a href="https://www.spotify.com/in-en/premium/"
                                class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                                started</a>
                        </div>

                        <div
                            class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Family</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for family use.</p>
                            <div class="flex items-baseline justify-center my-8">
                                <span class="mr-2 text-5xl font-extrabold">₹179</span>
                                <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
                            </div>

                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Up to 6 Premium accounts.</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Cancel anytime</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Subscribe or one-time payment</span>
                                </li>
                            </ul>
                            <a href="https://www.spotify.com/in-en/premium/"
                                class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                                started</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div class="mx-auto px-5">
                        <div class="flex flex-col items-center">
                        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Frequently Asked Question</h2>    
                        </div>
                        <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> What is "Mood Music"?</span>
                                        <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Mood Music is a website that helps you 
                                        find the perfect songs based on your mood. By answering a series of questions, our platform 
                                        analyzes your responses and uses the Spotify API to recommend relevant genres, top songs, 
                                        and curated playlists. Whether you’re feeling happy, relaxed, or energetic, Mood Music provides 
                                        the perfect soundtrack to match your mood.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> How does the mood selection process work?</span>
                                        <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">To find the perfect music for your mood, simply answer a few questions 
                                        about how you're feeling. Our AI model processes your responses and suggests genres and playlists that fit your mood, 
                                        powered by the Spotify API for an up-to-date music selection.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> Is Mood Music free to use?</span>
                                        <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Mood Music is free to use for mood-based song recommendations. 
                                        However, to play songs ad-free and access some premium features, you’ll need a Spotify Premium account. 
                                        If you don't have a Spotify account, you can easily create one directly on our website.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> Do I need a Spotify account to use Mood Music?</span>
                                        <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, you will need a Spotify account to use Mood Music. 
                                        If you don’t have one, you can create an account directly on our website. 
                                        A free Spotify account will let you enjoy mood-based song recommendations, 
                                        but for an ad-free experience and additional premium features, a Spotify Premium account is required.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> How accurate are the song recommendations?</span>
                                        <span class="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Our AI model analyzes your mood based on your responses to personalized questions. 
                                        The more accurately you answer, the better the recommendations. 
                                        We use the Spotify API to suggest the top songs and playlists for each mood, ensuring relevant and diverse choices.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-gray-50 dark:bg-gray-800">
                <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div class="max-w-screen-sm mx-auto text-center">
                        <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start
                            your free trial today</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Spotify for 30 days.</p>
                        <a href="https://www.spotify.com/in-en/legal/new-30-days-free-trial-terms-and-conditions/"
                            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Free
                            trial for 30 days</a>
                    </div>
                </div>
            </section>
            <footer class="bg-white dark:bg-gray-800">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center">
                            <img src="https://demo.themesberg.com/landwind/images/logo.svg" class="h-8 me-3" alt="Mood Music Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mood Music</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-1">
                                <a href="mailto:yugant.work@gmail.com" class="hover:underline">Yugant Chaudhury</a>
                            </li>
                            {/* <li>
                                <a href="mailto:mail Address" class="hover:underline">Krishna Pradhan</a>
                            </li> */}
                        </ul>
                    </div>

                        <div>
                            <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-1">
                                    <a href="https://github.com/Yugant1338/Mood-Music-Player" class="hover:underline ">Github</a>
                                </li>
                                <li class="mb-1">
                                    <a href="https://www.linkedin.com/in/yugant-chaudhury-252288248/" class="hover:underline">LinkedIn</a>
                                </li>
                                <li class="mb-1">
                                    <a href="https://www.leetcode.com/u/yugant_04" class="hover:underline">LeetCode</a>
                                </li >
                                {/* <li>
                                    <a href="#" class="hover:underline">LinkedIn(Krishna)</a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-1">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Yugant Chaudhury. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                                </svg>
                            <span class="sr-only">Discord community</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="sr-only">GitHub account</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
                </div>
            </footer>
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </div>
    );
};

export default Login;
            