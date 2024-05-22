'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
    <span className="font-mono">&lt;</span>创造力
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
    return (
        <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span
          className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span
            className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"/>
        <span
            className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"/>
        <span
            className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"/>
        <span
            className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"/>
      </span>
      表达者
    </span>
    )
}
function Yolo() {
    return (
        <span className="group relative  p-1 pb-2">
                  <svg className="inline-block cursor-pointer" height="auto" width="100px" viewBox="0 0 480 360"
                       preserveAspectRatio="xMidYMid meet" id="svg_document">
            <g id="main_group">
                <path stroke="currentColor" stroke-linejoin="round" id="path1" stroke-width="15.75px"
                      transform="translate(10, 5)"
                      d="M2 183.099C4.4 180.832 7.19999 177.965 10.4 174.499C13.6 171.032 16.7333 166.899 19.8 162.099C22.8667 157.165 25.4 151.632 27.4 145.499C29.5333 139.365 30.6 132.499 30.6 124.899V100.699V146.899C30.6 169.032 40.6 184.999 63.6 184.999C77.6 184.999 89 176.299 93.4 168.699C97.9333 160.965 100.2 150.432 100.2 137.099V100.699V248.199C100.2 279.399 87.6002 286.998 75.2 286.998C64.6667 286.998 60.6002 282.998 56.6002 278.998C52.6002 273.998 50.4 268.498 50.4 259.399C50.4 239.498 67.3266 216.099 101.1 195.999L144.301 165.8C141.101 159.72 139.341 153.819 139.341 146.139C139.341 138.459 140.995 131.633 144.301 125.659C148.581 118.598 151.495 115.469 157.741 111.579C163.501 108.059 169.955 106.299 177.101 106.299C184.248 106.299 190.648 108.059 196.301 111.579C203.354 116.718 206.079 119.831 209.581 125.659C212.888 131.633 214.541 138.459 214.541 146.139C214.541 153.819 212.888 160.699 209.581 166.779C206.381 172.859 201.955 177.659 196.301 181.179C190.755 184.593 184.355 186.299 177.101 186.299C169.848 186.299 163.341 184.593 157.581 181.179C151.782 176.209 147.902 173.596 144.301 166.119C141.48 159.3 138.98 154.8 139.48 146.139C139.98 138.3 139.98 133.3 144.372 125.659C148.739 118.414 151.764 115.59 157.741 111.8C162.726 108.922 163.146 108.809 168.941 107.9C172.675 112.966 177.741 116.966 184.141 119.9C190.675 122.833 198.08 126.833 206.08 127.1H211.48C216.414 127.1 221.414 126.7 226.48 125.9C231.414 125.1 239.68 123.166 244.88 121.7C250.267 120.805 253.544 119.473 256.48 118.3C266.08 114.3 270.433 109.283 277.9 101.95C285.367 94.4832 291.233 85.6165 295.5 75.3498C299.9 65.0831 302.1 53.6831 302.1 41.1498C302.1 29.0498 299.7 20.3998 295.5 13.4998C291.3 6.59981 285.3 3.14981 277.5 3.14981C273.6 3.14981 272.3 3.9 269 5.5C265.8 7.1 264.441 9.90002 262.241 13.5C260.148 16.9119 259.32 18.6878 258.491 21.6C257.591 24.5 256.841 28.05 256.241 32.25C255.641 36.45 255.241 41.65 255.041 47.85C254.841 54.05 254.741 61.6 254.741 70.5V142.3L255.08 153.7C255.28 157.6 255.58 160.8 255.98 163.3C256.38 165.7 256.83 167.9 257.33 169.9C258.93 175.7 261.73 180.2 265.73 183.4C268.515 185.786 272.288 186.987 277.05 187C285.183 187 294.773 183.777 302.5 179.5C310.227 175.223 317.968 167.253 322.406 161.899L321.046 158.194C320.145 155.3 319.579 152.271 319.38 148.914C319.364 148.035 319.383 147.114 319.439 146.139C319.703 141.999 319.828 138.65 320.533 135.287C320.999 133.067 321.718 130.841 322.897 128.376C323.315 127.452 323.769 126.546 324.26 125.659C328.54 118.598 331.454 115.469 337.7 111.579C343.46 108.059 349.913 106.299 357.06 106.299C364.207 106.299 370.607 108.059 376.26 111.579C383.313 116.718 386.038 119.831 389.54 125.659C389.803 126.134 390.055 126.614 390.297 127.1C393.099 132.723 394.5 139.07 394.5 146.139C394.5 153.819 392.847 160.699 389.54 166.779C386.34 172.859 381.913 177.659 376.26 181.179C370.713 184.593 364.313 186.299 357.06 186.299C349.807 186.299 343.3 184.593 337.54 181.179C331.74 176.209 327.86 173.596 324.26 166.119L322.255 161.899"
                      fill="none" stroke-linecap="round">
               <animate dur="5s" values="0,4000;4000,0" begin="click;0;touchstart" id="animateSig1" fill="freeze" attributeName="stroke-dasharray" attributeType="XML"></animate>

                </path>
        
            </g>
        </svg>
        </span>
    
    
    )
}

function OCD() {
    return (
        <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"/>
      <span>超级个体</span>
    </span>
    )
}
function Founder() {
    return (
        <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20"/>
      <span>异想天开</span>
    </span>
    )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
          <Developer/>，<Designer/>，<Yolo/>，
          <br/>
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
            我是Jrenc，公司名
            <PeekabooLink href="https://gjwy.framer.website/">归家望月</PeekabooLink>
            ，独立开发者。家在莱芜现居于青岛。希望人生可以做出一些用心的think
            different的作品，或许它像鱿鱼干一样耐嚼，又或如爆裂鼓手那般热烈。但总之，希望当有一天我回望我的一生时，会由衷的感慨道，这真的是很有意思的旅途。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://www.jrenc.com/twitter"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://www.jrenc.com/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://www.jrenc.com/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://www.jrenc.com/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://www.jrenc.com/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:hi@www.jrenc.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
