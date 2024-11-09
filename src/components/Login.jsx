import React from "react";

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
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MoodMusic</span>
                        </a>
                        <div class="flex items-center lg:order-2">
                            <button onClick={handleLogin} class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Login</button>
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
                                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Spotify
                                            </a>
                                </li>
                                <li>   
                                    <a href="https://github.com/Yugant1338/Mood-Music-Player"
                                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/yugant-chaudhury-252288248/"
                                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="bg-white dark:bg-gray-900 w-full">
                <div class="grid w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
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
                                <a href="https://github.com/Yugant1338/Mood-Music-Player" target="_blank"
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512">
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                        </svg> View on GitHub
                                </a>
                                <button onClick={handleLogin}
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512">
                                        <path 
                                            d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                                        </svg> Sign Up / Login 
                                    </button>
                            </div>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image"/>
            </div>
                    </div>
            </section>



            {/* Testimony or something can be added here */}
            {/* <section class="bg-gray-50 dark:bg-gray-800">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure class="max-w-screen-md mx-auto">
                        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Landwind is just awesome. It
                                contains tons of predesigned components and pages starting from login screen to complex dashboard.
                                Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                            <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section> */}


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
                <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        <div>
                            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                            <ul class="text-gray-500 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">About</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Careers</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Brand Center</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                            <ul class="text-gray-500 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Discord Server</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Twitter</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline"/>Facebook
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                            <ul class="text-gray-500 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Licensing</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                            <ul class="text-gray-500 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">About</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Careers</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Brand Center</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
                            <ul class="text-gray-500 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">iOS</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Android</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Windows</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div class="text-center">
                        <a href="#"
                            class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src="https://demo.themesberg.com/landwind/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            Landwind
            </a>
                            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2021-2022 Landwind™. All Rights Reserved. Built with <a href="#" target="_blank" class="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="#" target="_blank" class="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
            </span>
                            <ul class="flex justify-center mt-5 space-x-5">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </footer>
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </div>
    );
};

export default Login;
            