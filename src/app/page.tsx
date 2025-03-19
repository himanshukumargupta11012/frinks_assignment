'use client'
import Campaign from "./components/Campaign";
import InfoBox from "./components/InfoBox";
import SideBar from "./components/SideBar";
import { useState } from "react";
import classNames from "classnames";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const campaign_data = Array(10).fill({
    name: "Cookie Mfg Email Outreach",
    industry: "F&B",
    type: "Email Outreach",
    geography: "India",
    goal: "Email Outreach through 3rd party",
    status: "Completed",
    budget: "$300,000",
    owner: "Aditya",
    createdAt: new Date("2021-03-12")
  })

  const info_box_data = [{
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3333 3.86162C16.0907 3.61904 15.7134 3.61904 15.4708 3.86162L6.30674 12.7562L1.77862 8.30889C1.53604 8.06631 1.15869 8.09326 0.916115 8.30889C0.673537 8.55146 0.70049 8.92881 0.916115 9.17139L5.68682 13.8073C5.84854 13.969 6.06416 14.0499 6.30674 14.0499C6.54932 14.0499 6.73799 13.969 6.92666 13.8073L16.3333 4.67021C16.5759 4.48154 16.5759 4.1042 16.3333 3.86162Z" fill="#374151" />
    </svg>,
    count: 0,
    type: "Done"
  },
    {
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_84_11465)">
          <path d="M16.9948 3.7541C16.1323 2.8377 15.2159 1.92129 14.2995 1.03184C14.1108 0.843164 13.8952 0.735352 13.6526 0.735352C13.41 0.735352 13.1674 0.816211 13.0057 1.00488L2.8444 11.0854C2.68268 11.2471 2.57487 11.4357 2.49401 11.6244L1.01159 16.1525C0.930729 16.3682 0.984635 16.5838 1.09245 16.7455C1.22721 16.9072 1.41589 17.015 1.65846 17.015H1.76628L6.37526 15.4787C6.59088 15.3979 6.77956 15.29 6.91432 15.1283L17.0217 5.04785C17.1835 4.88613 17.2913 4.64355 17.2913 4.40098C17.2913 4.1584 17.1835 3.94277 16.9948 3.7541ZM6.05182 14.2928C6.02487 14.3197 5.99792 14.3197 5.97096 14.3467L2.49401 15.5057L3.65299 12.0287C3.65299 12.0018 3.67995 11.9748 3.7069 11.9479L11.119 4.5627L13.4639 6.90762L6.05182 14.2928ZM14.2995 6.04512L11.9546 3.7002L13.5987 2.05605C14.3803 2.81074 15.162 3.61934 15.9167 4.40098L14.2995 6.04512Z" fill="#374151" />
        </g>
        <defs>
          <clipPath id="clip0_84_11465">
            <rect width="17.25" height="17.25" fill="white" transform="translate(0.5 0.25)" />
          </clipPath>
        </defs>
      </svg>,
      count: 0,
      type: "Updated"
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_84_11471)">
          <path d="M16.1727 8.28184H9.2457V1.32793C9.2457 1.00449 8.97617 0.708008 8.62578 0.708008C8.30234 0.708008 8.00586 0.977539 8.00586 1.32793V8.28184H1.07891C0.755469 8.28184 0.458984 8.55137 0.458984 8.90176C0.458984 9.22519 0.728516 9.52168 1.07891 9.52168H8.03281V16.4217C8.03281 16.7451 8.30234 17.0416 8.65273 17.0416C8.97617 17.0416 9.27266 16.7721 9.27266 16.4217V9.49473H16.1727C16.4961 9.49473 16.7926 9.22519 16.7926 8.8748C16.7926 8.55137 16.4961 8.28184 16.1727 8.28184Z" fill="#374151" />
        </g>
        <defs>
          <clipPath id="clip0_84_11471">
            <rect width="17.25" height="17.25" fill="white" transform="translate(0 0.25)" />
          </clipPath>
        </defs>
      </svg>,
      count: 0,
      type: "Created"
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_84_11477)">
          <path d="M16.2504 3.23145H14.7316V2.6127C14.7316 2.2752 14.4504 1.96582 14.0848 1.96582C13.7191 1.96582 13.4379 2.24707 13.4379 2.6127V3.20332H5.53477V2.6127C5.53477 2.2752 5.25352 1.96582 4.88789 1.96582C4.52227 1.96582 4.24102 2.24707 4.24102 2.6127V3.20332H2.75039C1.79414 3.20332 0.978516 3.99082 0.978516 4.97519V14.7627C0.978516 15.7189 1.76602 16.5346 2.75039 16.5346H16.2504C17.2066 16.5346 18.0223 15.7471 18.0223 14.7627V4.97519C18.0223 4.01894 17.2066 3.23145 16.2504 3.23145ZM2.75039 4.49707H4.26914V5.05957C4.26914 5.39707 4.55039 5.70645 4.91602 5.70645C5.28164 5.70645 5.56289 5.4252 5.56289 5.05957V4.49707H13.5223V5.05957C13.5223 5.39707 13.8035 5.70645 14.1691 5.70645C14.5348 5.70645 14.816 5.4252 14.816 5.05957V4.49707H16.2504C16.5316 4.49707 16.7566 4.72207 16.7566 5.00332V6.85957H2.27227V5.00332C2.27227 4.69395 2.46914 4.49707 2.75039 4.49707ZM16.2504 15.2408H2.75039C2.46914 15.2408 2.24414 15.0158 2.24414 14.7346V8.09707H16.7285V14.7627C16.7566 15.0439 16.5316 15.2408 16.2504 15.2408Z" fill="#374151" />
          <path d="M8.60117 8.88477H7.98242C7.81367 8.88477 7.70117 8.99727 7.70117 9.16602V9.78477C7.70117 9.95352 7.81367 10.066 7.98242 10.066H8.60117C8.76992 10.066 8.88242 9.95352 8.88242 9.78477V9.16602C8.88242 8.99727 8.7418 8.88477 8.60117 8.88477Z" fill="#374151" />
          <path d="M11.1598 8.88477H10.541C10.3723 8.88477 10.2598 8.99727 10.2598 9.16602V9.78477C10.2598 9.95352 10.3723 10.066 10.541 10.066H11.1598C11.3285 10.066 11.441 9.95352 11.441 9.78477V9.16602C11.441 8.99727 11.3285 8.88477 11.1598 8.88477Z" fill="#374151" />
          <path d="M13.7184 8.88477H13.0996C12.9309 8.88477 12.8184 8.99727 12.8184 9.16602V9.78477C12.8184 9.95352 12.9309 10.066 13.0996 10.066H13.7184C13.8871 10.066 13.9996 9.95352 13.9996 9.78477V9.16602C13.9996 8.99727 13.8871 8.88477 13.7184 8.88477Z" fill="#374151" />
          <path d="M5.9 11.0503H5.28125C5.1125 11.0503 5 11.1628 5 11.3315V11.9503C5 12.119 5.1125 12.2315 5.28125 12.2315H5.9C6.06875 12.2315 6.18125 12.119 6.18125 11.9503V11.3315C6.18125 11.1628 6.04063 11.0503 5.9 11.0503Z" fill="#374151" />
          <path d="M8.60117 11.0503H7.98242C7.81367 11.0503 7.70117 11.1628 7.70117 11.3315V11.9503C7.70117 12.119 7.81367 12.2315 7.98242 12.2315H8.60117C8.76992 12.2315 8.88242 12.119 8.88242 11.9503V11.3315C8.88242 11.1628 8.7418 11.0503 8.60117 11.0503Z" fill="#374151" />
          <path d="M11.1598 11.0503H10.541C10.3723 11.0503 10.2598 11.1628 10.2598 11.3315V11.9503C10.2598 12.119 10.3723 12.2315 10.541 12.2315H11.1598C11.3285 12.2315 11.441 12.119 11.441 11.9503V11.3315C11.441 11.1628 11.3285 11.0503 11.1598 11.0503Z" fill="#374151" />
          <path d="M13.7184 11.0503H13.0996C12.9309 11.0503 12.8184 11.1628 12.8184 11.3315V11.9503C12.8184 12.119 12.9309 12.2315 13.0996 12.2315H13.7184C13.8871 12.2315 13.9996 12.119 13.9996 11.9503V11.3315C13.9996 11.1628 13.8871 11.0503 13.7184 11.0503Z" fill="#374151" />
          <path d="M5.9 13.2158H5.28125C5.1125 13.2158 5 13.3283 5 13.4971V14.1158C5 14.2846 5.1125 14.3971 5.28125 14.3971H5.9C6.06875 14.3971 6.18125 14.2846 6.18125 14.1158V13.4971C6.18125 13.3283 6.04063 13.2158 5.9 13.2158Z" fill="#374151" />
          <path d="M8.60117 13.2158H7.98242C7.81367 13.2158 7.70117 13.3283 7.70117 13.4971V14.1158C7.70117 14.2846 7.81367 14.3971 7.98242 14.3971H8.60117C8.76992 14.3971 8.88242 14.2846 8.88242 14.1158V13.4971C8.88242 13.3283 8.7418 13.2158 8.60117 13.2158Z" fill="#374151" />
          <path d="M11.1598 13.2158H10.541C10.3723 13.2158 10.2598 13.3283 10.2598 13.4971V14.1158C10.2598 14.2846 10.3723 14.3971 10.541 14.3971H11.1598C11.3285 14.3971 11.441 14.2846 11.441 14.1158V13.4971C11.441 13.3283 11.3285 13.2158 11.1598 13.2158Z" fill="#374151" />
        </g>
        <defs>
          <clipPath id="clip0_84_11477">
            <rect width="18" height="18" fill="white" transform="translate(0.5 0.25)" />
          </clipPath>
        </defs>
      </svg>,
      count: 0,
      type: "Due"
    }
]
  const notification_count = 2
  const col_width = ["1/8", "1/8", "1/16", "1/8", "1/8", "[80px]", "1/16", "1/16", "[150px]"]
  const sort_options = ["Target Industry", "Type", "Target Geography", "Status", "Owner"]
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>

    <div>
      <div className="hidden w-1/8 w-1/16"></div>
      
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className="pt-5 ml-[100px] mr-5">
        <div className="flex justify-between">
          <div className="text-[32px] font-medium text-[#1E1E1E]">
            Campaigns
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-40">
            <input type="text" placeholder="Search" className="border-[#D1D5DC] border-[2.5px] p-1 rounded pl-5 w-[300px] md:w-[400px]" />
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
              <path d="M18.375 18.375L14.875 14.875M16.625 9.625C16.625 11.4815 15.8875 13.262 14.5747 14.5747C13.262 15.8875 11.4815 16.625 9.625 16.625C7.76848 16.625 5.98801 15.8875 4.67525 14.5747C3.3625 13.262 2.625 11.4815 2.625 9.625C2.625 7.76848 3.3625 5.98801 4.67525 4.67525C5.98801 3.3625 7.76848 2.625 9.625 2.625C11.4815 2.625 13.262 3.3625 14.5747 4.67525C15.8875 5.98801 16.625 7.76848 16.625 9.625Z" stroke="#ACB2BE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className="flex gap-x-4 items-center">
              <div className="relative">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.59726 7.96001C4.79922 6.13791 5.6661 4.4543 7.03195 3.23147C8.3978 2.00865 10.1667 1.33252 11.9999 1.33252C13.8332 1.33252 15.602 2.00865 16.9679 3.23147C18.3338 4.4543 19.2006 6.13791 19.4026 7.96001L19.7386 10.9813L19.7466 11.0573C19.9187 12.556 20.4068 14.0012 21.1786 15.2973L21.2186 15.364L21.9879 16.648C22.6879 17.8133 23.0373 18.396 22.9613 18.8747C22.9111 19.1924 22.7477 19.4813 22.5013 19.688C22.1293 20 21.4493 20 20.0906 20H3.90926C2.54926 20 1.86926 20 1.49859 19.6893C1.2514 19.4825 1.08751 19.1931 1.03726 18.8747C0.96259 18.396 1.31192 17.8133 2.01059 16.648L2.78259 15.3627L2.82259 15.296C3.59373 14.0001 4.08134 12.5555 4.25326 11.0573L4.26126 10.9813L4.59726 7.96001Z" stroke="#374151" strokeWidth="1.5" />
                  <path d="M8.13672 20.5415C8.36472 21.5335 8.86738 22.4108 9.56605 23.0348C10.2647 23.6615 11.1207 24.0002 12.0007 24.0002C12.8807 24.0002 13.7367 23.6615 14.4354 23.0362C15.1341 22.4095 15.6354 21.5335 15.8647 20.5415" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="bg-[#E92C2C] text-white flex justify-center items-center rounded-full text-[10px] aspect-square absolute right-[0px] top-[-5px] w-[15px]">
                  {notification_count}
                </div>
              </div>
              <div className="rounded-full bg-[#ffede6] aspect-square flex justify-center items-center p-1 w-[35px]">
                T
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg font-light text-[#696D76] mb-1">
          Here&apos;s where you&apos;ll view a summary of Test&apos;s status, priorities, workload, and more.
        </div>
        <div className="flex gap-x-4 mb-1">
          {info_box_data.map((data, index) =>
            <InfoBox key={index} data={data} />
          )}
        </div>

        <div className="flex flex-col xl:flex-row justify-between mb-3 items-end gap-y-1">
          <div className="flex gap-x-4 w-full xl:w-fit">
            {sort_options.map((option, index) => 
            <div className="flex items-center gap-x-1" key={index}>
              <div className="text-[#4F4F4F] text-[14px]">
                {option}
              </div>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 12.3423L10.3724 9.00796L9.7538 8.39527L7.00018 11.1186L4.24743 8.39527L3.62793 9.00796L7.00018 12.3423Z" fill="#4F4F4F" />
                </svg>

            </div>
            )}
            <div className="flex items-center gap-x-1">
              <div className="text-[#4F4F4F] text-[14px]">
                Date
              </div>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4996 1.9873H9.48711V1.5748C9.48711 1.3498 9.29961 1.14355 9.05586 1.14355C8.81211 1.14355 8.62461 1.33105 8.62461 1.5748V1.96855H3.35586V1.5748C3.35586 1.3498 3.16836 1.14355 2.92461 1.14355C2.68086 1.14355 2.49336 1.33105 2.49336 1.5748V1.96855H1.49961C0.862109 1.96855 0.318359 2.49355 0.318359 3.1498V9.6748C0.318359 10.3123 0.843359 10.8561 1.49961 10.8561H10.4996C11.1371 10.8561 11.6809 10.3311 11.6809 9.6748V3.1498C11.6809 2.5123 11.1371 1.9873 10.4996 1.9873ZM1.49961 2.83105H2.51211V3.20605C2.51211 3.43105 2.69961 3.6373 2.94336 3.6373C3.18711 3.6373 3.37461 3.4498 3.37461 3.20605V2.83105H8.68086V3.20605C8.68086 3.43105 8.86836 3.6373 9.11211 3.6373C9.35586 3.6373 9.54336 3.4498 9.54336 3.20605V2.83105H10.4996C10.6871 2.83105 10.8371 2.98105 10.8371 3.16855V4.40605H1.18086V3.16855C1.18086 2.9623 1.31211 2.83105 1.49961 2.83105ZM10.4996 9.99356H1.49961C1.31211 9.99356 1.16211 9.84356 1.16211 9.65606V5.23105H10.8184V9.6748C10.8371 9.8623 10.6871 9.99356 10.4996 9.99356Z" fill="#374151" />
                <path d="M5.39883 5.75586H4.98633C4.87383 5.75586 4.79883 5.83086 4.79883 5.94336V6.35586C4.79883 6.46836 4.87383 6.54336 4.98633 6.54336H5.39883C5.51133 6.54336 5.58633 6.46836 5.58633 6.35586V5.94336C5.58633 5.83086 5.49258 5.75586 5.39883 5.75586Z" fill="#374151" />
                <path d="M7.10586 5.75586H6.69336C6.58086 5.75586 6.50586 5.83086 6.50586 5.94336V6.35586C6.50586 6.46836 6.58086 6.54336 6.69336 6.54336H7.10586C7.21836 6.54336 7.29336 6.46836 7.29336 6.35586V5.94336C7.29336 5.83086 7.21836 5.75586 7.10586 5.75586Z" fill="#374151" />
                <path d="M8.81289 5.75586H8.40039C8.28789 5.75586 8.21289 5.83086 8.21289 5.94336V6.35586C8.21289 6.46836 8.28789 6.54336 8.40039 6.54336H8.81289C8.92539 6.54336 9.00039 6.46836 9.00039 6.35586V5.94336C9.00039 5.83086 8.92539 5.75586 8.81289 5.75586Z" fill="#374151" />
                <path d="M3.6 7.19971H3.1875C3.075 7.19971 3 7.27471 3 7.38721V7.79971C3 7.91221 3.075 7.98721 3.1875 7.98721H3.6C3.7125 7.98721 3.7875 7.91221 3.7875 7.79971V7.38721C3.7875 7.27471 3.69375 7.19971 3.6 7.19971Z" fill="#374151" />
                <path d="M5.39883 7.19971H4.98633C4.87383 7.19971 4.79883 7.27471 4.79883 7.38721V7.79971C4.79883 7.91221 4.87383 7.98721 4.98633 7.98721H5.39883C5.51133 7.98721 5.58633 7.91221 5.58633 7.79971V7.38721C5.58633 7.27471 5.49258 7.19971 5.39883 7.19971Z" fill="#374151" />
                <path d="M7.10586 7.19971H6.69336C6.58086 7.19971 6.50586 7.27471 6.50586 7.38721V7.79971C6.50586 7.91221 6.58086 7.98721 6.69336 7.98721H7.10586C7.21836 7.98721 7.29336 7.91221 7.29336 7.79971V7.38721C7.29336 7.27471 7.21836 7.19971 7.10586 7.19971Z" fill="#374151" />
                <path d="M8.81289 7.19971H8.40039C8.28789 7.19971 8.21289 7.27471 8.21289 7.38721V7.79971C8.21289 7.91221 8.28789 7.98721 8.40039 7.98721H8.81289C8.92539 7.98721 9.00039 7.91221 9.00039 7.79971V7.38721C9.00039 7.27471 8.92539 7.19971 8.81289 7.19971Z" fill="#374151" />
                <path d="M3.6 8.64355H3.1875C3.075 8.64355 3 8.71855 3 8.83105V9.24355C3 9.35605 3.075 9.43105 3.1875 9.43105H3.6C3.7125 9.43105 3.7875 9.35605 3.7875 9.24355V8.83105C3.7875 8.71855 3.69375 8.64355 3.6 8.64355Z" fill="#374151" />
                <path d="M5.39883 8.64355H4.98633C4.87383 8.64355 4.79883 8.71855 4.79883 8.83105V9.24355C4.79883 9.35605 4.87383 9.43105 4.98633 9.43105H5.39883C5.51133 9.43105 5.58633 9.35605 5.58633 9.24355V8.83105C5.58633 8.71855 5.49258 8.64355 5.39883 8.64355Z" fill="#374151" />
                <path d="M7.10586 8.64355H6.69336C6.58086 8.64355 6.50586 8.71855 6.50586 8.83105V9.24355C6.50586 9.35605 6.58086 9.43105 6.69336 9.43105H7.10586C7.21836 9.43105 7.29336 9.35605 7.29336 9.24355V8.83105C7.29336 8.71855 7.21836 8.64355 7.10586 8.64355Z" fill="#374151" />
              </svg>

            </div>

            <div className="flex items-center gap-x-1">
              <div className="text-[#4F4F4F] text-[14px]">
                Advanced Filters
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.375 4H3L7.55 9.51833V13.3333L9.825 14.5V9.51833L14.375 4Z" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


            </div>
          
          </div>
          <div className="flex gap-x-4 items-end">
            <div className="text-[#4F4F4F] text-[14px] flex gap-x-3 items-center">
              Table View
              <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-7 h-4 bg-[#C4C4C4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all flex flex-end"></div>
                </label>
              </div>
               Kanban View
            </div>
            <button className="btn bg-[#FF4301] px-[12.6px] py-[5px] rounded-[4.76px] text-white text-[18.9px]">Create Campaign</button>
          </div>

        </div>

        <div className="flex bg-[#ff6934] text-white px-7 py-2 gap-8 text-center">
          <div className={classNames(`w-${col_width[0]}`)}>Campaign Name</div>
          <div className={`w-${col_width[1]}`}>Target Industry</div>
          <div className={`w-${col_width[2]}`}>Type</div>
          <div className={`w-${col_width[3]}`}>Target Geography</div>
          <div className={`w-${col_width[4]}`}>Goal</div>
          <div className={`w-${col_width[5]}`}>Status</div>
          <div className={`w-${col_width[6]}`}>Budget</div>
          <div className={`w-${col_width[7]}`}>Owner</div>
          <div className={`w-${col_width[8]}`}>Created At</div>

        </div>
        <div className="m-5">
          {campaign_data.map((data, index) =>
            <Campaign key={index} data={data} col_width={col_width}/>
          )}
        </div>
      </div>
    </div>
  );
}
