import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Fullstack Genix Tailwindcss Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Fullstack Genix Tailwindcss Projects" />
        <meta
          name="description"
          content="A collection of tailwindcss projects built in fullstack genix's  youtube video tutorials. Creator: Pradeep Nayak."
        />
        <meta
          name="keywords"
          content="fullstack genix, full stack genix, fullstack genix tailiwind projects, best tailwindcss projects, collection of websites built with tailwindcss, collection of tailwindcss websites, built with tailwindcss,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Pradeep Nayak"></meta>
      </Head>

      <main className="">
        <div className="bg-white border-teal-500 border-b-2">
          <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <img className="h-16" src="logo.svg" />
              </a>

              <ul className="flex items-center space-x-8 lg:flex">
                <li>
                  <a
                    href="tel:+91 74704 07696"
                    className="inline-flex items-center justify-center  py-3 uppercase text-sm  px-8 font-bold tracking-wider text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                    aria-label="Contact Us"
                    title="Contact Us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* navbar ends */}
        {/* hero begins */}
        <div className="bg-teal-50 bg-center bg-cover bg-no-repeat bg-svg-1">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <a href="/" className="mb-6 mx-auto">
                  <div className="flex items-center justify-center w-32 h-32 rounded-full ">
                    <img
                      className="object-cover w-32 h-32 object-center"
                      src="tailwind.svg"
                    />
                  </div>
                </a>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-wide text-teal-500 sm:text-4xl md:mx-auto">
                    Built With Tailwindcss
                  </h2>
                  <p className="text-base text-teal-800 md:text-2xl">
                    A collection of projects built with tailwindcss.
                  </p>
                  <a
                    href="https://www.youtube.com/channel/UCWG9t47Ke0Kjd77DDOzjkZg"
                    className="inline-flex items-center justify-center uppercase rounded mt-10 group  w-full pl-10 pr-5 py-5  font-bold leading-4 bg-teal-500 border-2 border-teal-500 text-teal-50 shadow-sm  md:w-auto   hover:bg-white hover:text-teal-700 transition duration-300  focus:outline-none "
                  >
                    Fullstack Genix
                    <span className="ml-5">
                      <svg
                        className="h-4 group-hover:text-teal-700"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.668 0.499581C16.4023 0.701091 16.9807 1.29484 17.1769 2.04884C17.5336 3.41539 17.5336 6.2667 17.5336 6.2667C17.5336 6.2667 17.5336 9.1179 17.1769 10.4845C16.9807 11.2386 16.4023 11.8323 15.668 12.0339C14.3372 12.4 9.00025 12.4 9.00025 12.4C9.00025 12.4 3.66333 12.4 2.33242 12.0339C1.59807 11.8323 1.01974 11.2386 0.823477 10.4845C0.466919 9.1179 0.466919 6.2667 0.466919 6.2667C0.466919 6.2667 0.466919 3.41539 0.823477 2.04884C1.01974 1.29484 1.59807 0.701091 2.33242 0.499581C3.66333 0.133362 9.00025 0.133362 9.00025 0.133362C9.00025 0.133362 14.3372 0.133362 15.668 0.499581ZM7.40027 3.86664V9.19997L11.6669 6.53341L7.40027 3.86664Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero ends */}
        {/* project cards begins */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* single card begins */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="weather.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-teal-900 hover:text-teal-700">
                    Last Updated
                  </span>
                  <span className="text-gray-600">— 28 Dec 2020</span>
                </p>
                <a
                  href="https://the-nayak.github.io/weather-app-live/"
                  target="_blank"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-xl font-bold leading-5 text-teal-800 transition-colors duration-200 hover:text-teal-700"
                >
                  Weather App
                </a>
                <p className="mb-2 text-sm text-gray-700">
                  This Weather App uses Tailwindcss, Vuejs and Open Weather Map
                  API. This was the first project I built while learning
                  tailwindcss.
                </p>

                <div className="flex flex-col items-center justify-between">
                  <a
                    href="https://the-nayak.github.io/weather-app-live/"
                    target="_blank"
                    className="flex items-center justify-center uppercase rounded mt-5 group  w-full pl-10 pr-5 py-3 text-sm  font-bold leading-4 border-teal-500 border-2     bg-teal-50 text-teal-500 shadow-sm     hover:bg-white hover:text-teal-700 transition duration-300  focus:outline-none "
                  >
                    View this live
                    <span className="ml-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCWG9t47Ke0Kjd77DDOzjkZg"
                    className="flex items-center justify-center uppercase rounded mt-4 group  w-full pl-10 pr-5 py-3 text-sm  font-bold leading-4 hover:border-teal-500 border-2  bg-teal-500 text-teal-50 shadow-sm     hover:bg-white hover:text-teal-700 transition duration-300  focus:outline-none "
                  >
                    Watch on Youtube
                    <span className="ml-5">
                      <svg
                        className="h-4 group-hover:text-teal-700"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.668 0.499581C16.4023 0.701091 16.9807 1.29484 17.1769 2.04884C17.5336 3.41539 17.5336 6.2667 17.5336 6.2667C17.5336 6.2667 17.5336 9.1179 17.1769 10.4845C16.9807 11.2386 16.4023 11.8323 15.668 12.0339C14.3372 12.4 9.00025 12.4 9.00025 12.4C9.00025 12.4 3.66333 12.4 2.33242 12.0339C1.59807 11.8323 1.01974 11.2386 0.823477 10.4845C0.466919 9.1179 0.466919 6.2667 0.466919 6.2667C0.466919 6.2667 0.466919 3.41539 0.823477 2.04884C1.01974 1.29484 1.59807 0.701091 2.33242 0.499581C3.66333 0.133362 9.00025 0.133362 9.00025 0.133362C9.00025 0.133362 14.3372 0.133362 15.668 0.499581ZM7.40027 3.86664V9.19997L11.6669 6.53341L7.40027 3.86664Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single card ends */}
            {/* single card begins */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="resume.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-teal-900 hover:text-teal-700">
                    Last Updated
                  </span>
                  <span className="text-gray-600">— 28 Dec 2020</span>
                </p>
                <a
                  href="https://the-nayak.github.io/tailwindcss-resume-website/"
                  target="_blank"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-xl font-bold leading-5 text-teal-800 transition-colors duration-200 hover:text-teal-700"
                >
                  Weather App
                </a>
                <p className="mb-2 text-sm text-gray-700">
                  This Weather App uses Tailwindcss, Vuejs and Open Weather Map
                  API. This was the first project I built while learning
                  tailwindcss.
                </p>

                <div className="flex flex-col items-center justify-between">
                  <a
                    href="https://the-nayak.github.io/tailwindcss-resume-website/"
                    target="_blank"
                    className="flex items-center justify-center uppercase rounded mt-5 group  w-full pl-10 pr-5 py-3 text-sm  font-bold leading-4 border-teal-500 border-2     bg-teal-50 text-teal-500 shadow-sm     hover:bg-white hover:text-teal-700 transition duration-300  focus:outline-none "
                  >
                    View this live
                    <span className="ml-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCWG9t47Ke0Kjd77DDOzjkZg"
                    className="flex items-center justify-center uppercase rounded mt-4 group  w-full pl-10 pr-5 py-3 text-sm  font-bold leading-4 hover:border-teal-500 border-2  bg-teal-500 text-teal-50 shadow-sm     hover:bg-white hover:text-teal-700 transition duration-300  focus:outline-none "
                  >
                    Watch on Youtube
                    <span className="ml-5">
                      <svg
                        className="h-4 group-hover:text-teal-700"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.668 0.499581C16.4023 0.701091 16.9807 1.29484 17.1769 2.04884C17.5336 3.41539 17.5336 6.2667 17.5336 6.2667C17.5336 6.2667 17.5336 9.1179 17.1769 10.4845C16.9807 11.2386 16.4023 11.8323 15.668 12.0339C14.3372 12.4 9.00025 12.4 9.00025 12.4C9.00025 12.4 3.66333 12.4 2.33242 12.0339C1.59807 11.8323 1.01974 11.2386 0.823477 10.4845C0.466919 9.1179 0.466919 6.2667 0.466919 6.2667C0.466919 6.2667 0.466919 3.41539 0.823477 2.04884C1.01974 1.29484 1.59807 0.701091 2.33242 0.499581C3.66333 0.133362 9.00025 0.133362 9.00025 0.133362C9.00025 0.133362 14.3372 0.133362 15.668 0.499581ZM7.40027 3.86664V9.19997L11.6669 6.53341L7.40027 3.86664Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* single card ends */}
          </div>
        </div>
        {/* project cards ends */}
      </main>
      {/* footer section begins */}
      <footer className="text-teal-700 bg-teal-100 body-font">
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between flex-col space-y-5 md:flex-row md:space-y-0 ">
            <div className="flex items-center">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center mr-8"
              >
                <img className="h-12" src="logo.svg" />
              </a>
            </div>
            <div className="flex flex-col text-center text-sm items-center justify-center">
              <p>Designed &amp; Developed with Love by Pradeep Nayak</p>
              <p>
                Disclaimer: logos on this website are intellectual properties of
                their respective owners.
              </p>
            </div>
            <ul className="flex items-center space-x-4 lg:flex">
              <li>
                <a href="/">
                  <div className="p-2 bg-teal-200 rounded-full">
                    <svg
                      className="h-5 w-5 "
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.00105 0.466675C6.68352 0.466675 6.39267 0.476808 5.48244 0.518231C4.57398 0.559831 3.95389 0.703655 3.41131 0.914679C2.85006 1.13264 2.37396 1.4242 1.89965 1.89869C1.42497 2.37301 1.13341 2.8491 0.914746 3.41017C0.703188 3.95293 0.559187 4.57321 0.518297 5.4813C0.477586 6.39154 0.466919 6.68256 0.466919 9.0001C0.466919 11.3176 0.47723 11.6076 0.518475 12.5178C0.560253 13.4263 0.704077 14.0464 0.914924 14.589C1.13306 15.1502 1.42462 15.6263 1.89911 16.1006C2.37325 16.5753 2.84934 16.8676 3.41024 17.0855C3.95318 17.2965 4.57345 17.4404 5.48173 17.482C6.39196 17.5234 6.68263 17.5335 8.99999 17.5335C11.3177 17.5335 11.6077 17.5234 12.5179 17.482C13.4263 17.4404 14.0471 17.2965 14.5901 17.0855C15.1512 16.8676 15.6265 16.5753 16.1007 16.1006C16.5754 15.6263 16.8669 15.1502 17.0856 14.5891C17.2954 14.0464 17.4394 13.4261 17.482 12.518C17.5229 11.6078 17.5336 11.3176 17.5336 9.0001C17.5336 6.68256 17.5229 6.39171 17.482 5.48148C17.4394 4.57303 17.2954 3.95293 17.0856 3.41035C16.8669 2.8491 16.5754 2.37301 16.1007 1.89869C15.626 1.42402 15.1513 1.13246 14.5896 0.914679C14.0456 0.703655 13.4251 0.559831 12.5166 0.518231C11.6064 0.476808 11.3166 0.466675 8.99839 0.466675H9.00105ZM8.2355 2.00444C8.4627 2.00409 8.71621 2.00444 9.00102 2.00444C11.2794 2.00444 11.5495 2.01262 12.4492 2.05351C13.2812 2.09156 13.7328 2.23058 14.0336 2.34738C14.4318 2.50205 14.7157 2.68694 15.0142 2.98561C15.3129 3.28428 15.4978 3.56873 15.6528 3.96695C15.7696 4.2674 15.9088 4.71896 15.9467 5.55097C15.9876 6.45054 15.9965 6.72076 15.9965 8.99812C15.9965 11.2755 15.9876 11.5457 15.9467 12.4453C15.9086 13.2773 15.7696 13.7288 15.6528 14.0293C15.4981 14.4275 15.3129 14.7111 15.0142 15.0096C14.7156 15.3082 14.432 15.4931 14.0336 15.6478C13.7332 15.7651 13.2812 15.9038 12.4492 15.9418C11.5497 15.9827 11.2794 15.9916 9.00102 15.9916C6.72241 15.9916 6.45237 15.9827 5.5528 15.9418C4.72079 15.9034 4.26923 15.7644 3.96825 15.6476C3.57003 15.4929 3.28558 15.3081 2.98691 15.0094C2.68824 14.7107 2.50335 14.427 2.34832 14.0286C2.23152 13.7281 2.09232 13.2766 2.05445 12.4446C2.01357 11.545 2.00539 11.2748 2.00539 8.99598C2.00539 6.7172 2.01357 6.4484 2.05445 5.54884C2.0925 4.71683 2.23152 4.26527 2.34832 3.96447C2.50299 3.56624 2.68824 3.28179 2.98691 2.98312C3.28558 2.68445 3.57003 2.49956 3.96825 2.34454C4.26906 2.2272 4.72079 2.08853 5.5528 2.05031C6.34001 2.01476 6.64508 2.00409 8.2355 2.00231V2.00444ZM13.5561 3.42135C12.9908 3.42135 12.5321 3.87949 12.5321 4.44501C12.5321 5.01035 12.9908 5.46902 13.5561 5.46902C14.1214 5.46902 14.5801 5.01035 14.5801 4.44501C14.5801 3.87967 14.1214 3.42135 13.5561 3.42135ZM9.00107 4.61781C6.58095 4.61781 4.6188 6.57996 4.6188 9.00007C4.6188 11.4202 6.58095 13.3815 9.00107 13.3815C11.4212 13.3815 13.3826 11.4202 13.3826 9.00007C13.3826 6.57996 11.4212 4.61781 9.00107 4.61781ZM9.00103 6.1556C10.5719 6.1556 11.8455 7.42903 11.8455 9.00007C11.8455 10.5709 10.5719 11.8445 9.00103 11.8445C7.43 11.8445 6.15656 10.5709 6.15656 9.00007C6.15656 7.42903 7.43 6.1556 9.00103 6.1556Z"
                        fill="#0F766E"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="p-2 bg-teal-200 rounded-full">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M14.51 0H2.49048C1.11736 0 0.000244141 1.11712 0.000244141 2.49023V14.5098C0.000244141 15.8829 1.11736 17 2.49048 17H14.51C15.8831 17 17.0002 15.8829 17.0002 14.5098V2.49023C17.0002 1.11712 15.8831 0 14.51 0ZM9.99438 10.459V16.0039H8.99829V10.459C8.99829 10.1839 8.7753 9.96094 8.50024 9.96094H7.0061V8.96484H8.50024C8.7753 8.96484 8.99829 8.74185 8.99829 8.4668V6.47461C8.99829 5.10149 10.1154 3.98438 11.4885 3.98438H12.9827V4.98047H11.4885C10.6647 4.98047 9.99438 5.65074 9.99438 6.47461V8.4668C9.99438 8.74185 10.2174 8.96484 10.4924 8.96484H12.8428L12.5938 9.96094H10.4924C10.2174 9.96094 9.99438 10.1839 9.99438 10.459ZM16.0042 14.5098C16.0042 15.3336 15.3339 16.0039 14.51 16.0039H10.9905V10.957H12.9827C13.2112 10.957 13.4104 10.8015 13.4658 10.5798L13.9639 8.58759C14.0425 8.27322 13.8041 7.96875 13.4807 7.96875H10.9905V6.47461C10.9905 6.19999 11.2139 5.97656 11.4885 5.97656H13.4807C13.7558 5.97656 13.9788 5.75357 13.9788 5.47852V3.48633C13.9788 3.21127 13.7558 2.98828 13.4807 2.98828H11.4885C9.56616 2.98828 8.0022 4.55225 8.0022 6.47461V7.96875H6.50806C6.233 7.96875 6.01001 8.19174 6.01001 8.4668V10.459C6.01001 10.734 6.233 10.9537 6.50806 10.9537H8.0022V16.0039H2.49048C1.66661 16.0039 0.996338 15.3336 0.996338 14.5098V2.49023C0.996338 1.66637 1.66661 0.996094 2.49048 0.996094H14.51C15.3339 0.996094 16.0042 1.66637 16.0042 2.49023V14.5098Z"
                          fill="#0F766E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="17"
                            height="17"
                            fill="white"
                            transform="translate(0.000244141)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="p-2 bg-teal-200 rounded-full">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M5.01392 6.00977H3.02173C2.74664 6.00977 2.52368 6.23272 2.52368 6.50781V14.4766C2.52368 14.7517 2.74664 14.9746 3.02173 14.9746H5.01392C5.28901 14.9746 5.51196 14.7517 5.51196 14.4766V6.50781C5.51196 6.23272 5.28901 6.00977 5.01392 6.00977ZM4.51587 13.9785H3.51978V7.00586H4.51587V13.9785Z"
                          fill="#0F766E"
                        />
                        <path
                          d="M4.01782 2.02539C3.19397 2.02539 2.52368 2.69568 2.52368 3.51953C2.52368 4.34338 3.19397 5.01367 4.01782 5.01367C4.84167 5.01367 5.51196 4.34338 5.51196 3.51953C5.51196 2.69568 4.84167 2.02539 4.01782 2.02539ZM4.01782 4.01758C3.74325 4.01758 3.51978 3.79411 3.51978 3.51953C3.51978 3.24496 3.74325 3.02148 4.01782 3.02148C4.2924 3.02148 4.51587 3.24496 4.51587 3.51953C4.51587 3.79411 4.2924 4.01758 4.01782 4.01758Z"
                          fill="#0F766E"
                        />
                        <path
                          d="M11.8086 6.0405C10.9949 5.90846 10.162 6.06332 9.4931 6.45022C9.46443 6.20223 9.2538 6.00976 8.99829 6.00976H7.0061C6.73101 6.00976 6.50806 6.23271 6.50806 6.50781V14.4766C6.50806 14.7516 6.73101 14.9746 7.0061 14.9746H8.99829C9.27338 14.9746 9.49634 14.7516 9.49634 14.4766V9.99413C9.49634 9.44486 9.94315 8.99804 10.4924 8.99804C11.0417 8.99804 11.4885 9.44486 11.4885 9.99413V14.4766C11.4885 14.7516 11.7115 14.9746 11.9866 14.9746H13.9788C14.2539 14.9746 14.4768 14.7516 14.4768 14.4766V9.11555C14.4768 7.62815 13.4256 6.30288 11.8086 6.0405ZM13.4807 13.9785H12.4846V9.99413C12.4846 8.89558 11.591 8.00195 10.4924 8.00195C9.39388 8.00195 8.50024 8.89558 8.50024 9.99413V13.9785H7.50415V7.00585H8.50024V7.5039C8.50024 7.70532 8.62164 7.8869 8.80776 7.96407C8.99375 8.04112 9.20802 7.99844 9.35043 7.85603L9.58272 7.62374C10.0717 7.1349 10.8828 6.89937 11.6491 7.02375C12.8214 7.21402 13.4807 8.15084 13.4807 9.11555V13.9785Z"
                          fill="#0F766E"
                        />
                        <path
                          d="M14.4768 0H2.52368C1.14627 0 0.000244141 1.14693 0.000244141 2.52344V14.4766C0.000244141 15.854 1.14718 17 2.52368 17H14.4768C15.8542 17 17.0002 15.8531 17.0002 14.4766V2.52344C17.0002 1.14603 15.8533 0 14.4768 0ZM16.0042 14.4766C16.0042 15.3044 15.3047 16.0039 14.4768 16.0039H2.52368C1.69581 16.0039 0.996338 15.3044 0.996338 14.4766V2.52344C0.996338 1.69556 1.69581 0.996094 2.52368 0.996094H14.4768C15.3047 0.996094 16.0042 1.69556 16.0042 2.52344V14.4766Z"
                          fill="#0F766E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="17"
                            height="17"
                            fill="white"
                            transform="translate(0.000244141)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="p-2 bg-teal-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 text-green-800"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <polygon
                        points="160 128 112 96 112 160 160 128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></polygon>
                      <path
                        d="M24,128c0,29.75546,3.07414,47.21382,5.41108,56.18664a15.91682,15.91682,0,0,0,9.63282,10.89441C72.52083,207.94575,128,207.5925,128,207.5925s55.47857.35324,88.9558-12.51137a15.91684,15.91684,0,0,0,9.6329-10.89432C228.92572,175.214,232,157.75554,232,128s-3.07415-47.21382-5.41108-56.18664A15.91682,15.91682,0,0,0,216.9561,60.919C183.47917,48.05425,128,48.4075,128,48.4075s-55.47857-.35324-88.9558,12.51137a15.91684,15.91684,0,0,0-9.6329,10.89432C27.07427,80.786,24,98.24446,24,128Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer section ends */}
    </div>
  );
}
