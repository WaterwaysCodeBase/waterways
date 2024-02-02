import { 
  BsLightbulb, 
  BsGear, 
  BsFillBrightnessHighFill, 
  Bs1SquareFill, 
  Bs2SquareFill, 
  Bs3SquareFill,
  Bs4SquareFill,
  Bs5SquareFill,
  Bs6SquareFill,
} from "react-icons/bs";
import img1 from '../img/img1.jpg'

import process1 from '../img/image 5.png'
import process2 from '../img/image 6.png'
import process3 from '../img/image 7.png'
import process4 from '../img/process4.jpg'
import Animation from '../img/Animation.png'
import Animation1 from '../img/Animation1.png'
import Rectangle26 from '../img/Rectangle 26.png'
import Rectangle27 from '../img/Rectangle 27.png'
import Rectangle28 from '../img/Rectangle 28.png'
import Rectangle29 from '../img/Rectangle 29.png'
import Rectangle30 from '../img/Rectangle 30.png'
import Rectangle31 from '../img/Rectangle 31.png'
import Rectangle32 from '../img/Rectangle 32.png'
import Rectangle33 from '../img/Rectangle 33.png'
import Rectangle34 from '../img/Rectangle 34.png'
import Rectangle35 from '../img/Rectangle 35.png'

export const homeCardContent = [
  {
    icon: BsLightbulb,
    title: "Creativity",
    text: "We believe in working hand in hand, aligning our expertise with your vision. Together, we co-create solutions that bring your ideas to life.",
    time: '1000'
  },
  {
    icon: BsGear,
    title: "Efficiency",
    text: "We are committed to optimizing processes, enhancing performance, and delivering solutions that save you time and resources.",
    time: '1800'
  },
  {
    icon: BsFillBrightnessHighFill,
    title: "Innovation",
    text: "Innovation is the cornerstone of our digital solution services. We're committed to breaking boundaries and pushing the limits of what's possible.",
    time: '2200'
  }
];

export const homeSliderConent = [
  {
    image: img1,
    title: 'Tailored Solutions',
    text: 'We customize solutions to meet your unique needs, ensuring we address customer’s challenges precisely.'
  },
  {
    image: img1,
    title: 'Reliability & Trust',
    text: 'Trust: Trust is the cornerstone of our relationships. We will deliver reliable services that exceed industry standards.'
  },
  {
    image: img1,
    title: 'Continuous Improvement',
    text: 'We adapt to the rapidly evolving ICT sector, ensuring you stay ahead.'
  },
  {
    image: img1,
    title: 'Cost-Efficiency',
    text: 'Quality ICT should not break the bank. We offer cost-effective solutions without compromising quality.'
  },
  {
    image: img1,
    title: 'Tailored Solutions',
    text: 'We customize solutions to meet your unique needs, ensuring we address customer’s challenges precisely.'
  },
]

export const processContent = [
  {
    image: process1,
    icon: Bs1SquareFill,
    title: 'Web Strategy',
    text: `Your brand goes beyond logo and colours. It involves your messaging, your voice, your tone, and your culture. It also needs to be consistent. Through clearly defined brand guidelines, we will help you ensure that your brand is used the right way – every time.`
  },
  {
    image: process2,
    icon: Bs2SquareFill,
    title: 'Design of your Brand Identity',
    text: `At this step, we begin work on the logo. Based on what we’ve achieved in the first step, we explore multiple concepts, colours and typefaces to create options for your brand identity. We share these with you, and work together to ensure you are perfectly satisfied. The final logo is then sent to you in multiple formats – for both print and digital use.`
  },
  {
    image: process3,
    icon: Bs3SquareFill,
    title: 'Collateral Design',
    text: `Once you are pleased with your logo, we begin work on all the additional stationery or collateral you need. Examples of collateral will include business cards, letterhead, roll-up banners, flyers, invoices/receipts, envelopes, icons, social media covers, email signature, email templates, … basically everything that involves your new brand identity.`
  },
]
export const process2Content = [
  {
    image: process1,
    icon: Bs1SquareFill,
    title: 'Creation of Your Brand Strategy',
    text: `We start by understanding your business – your brand, history, unique selling points, competitors and of course, your goals. We review your existing website (if you have one), and then familiarize ourselves with your industry to understand best practices.
    We also make sure we understand the goals of your target audience – this is critical to the success of your website.
    Finally, we come up with a plan for the website – the architecture, wireframes, and content.`
  },
  {
    image: process2,
    icon: Bs2SquareFill,
    title: 'Design',
    text: `The brain processes images faster than words. So when designing, we create the right combination of images, colours, fonts, space, and calls-to-action to attract and connect with your audience.
    This ensures that visitors flow through the website, consume content, build trust, and intuitively take the required action.`
  },
  {
    image: process3,
    icon: Bs3SquareFill,
    title: 'Development',
    text: `Once we have nailed the design, we move on to the development phase where we build the website theme, add your content, and ensure everything works perfectly.
    In addition to this, if required, we handle complex integrations involving APIs, portals and CRMs.`
  },
  {
    image: process4,
    icon: Bs4SquareFill,
    title: 'Brand Guideline Development',
    text: `Finally, we create your brand guidelines – an important document that contains a breakdown of the brand identity, the fonts used, and the color codes. Your brand guidelines document will also contain instructions on how to (and how not to) use your logo.`
  },
]

export const servicesContent = [
  {
    icon: Bs1SquareFill,
    title: 'Responsive Design',
    text: 'Your website will be designed to render beautifully across all devices – desktops, tablets, and mobile.'
  },
  {
    icon: Bs2SquareFill,
    title: 'Optimized for Search',
    text: 'Your website will not only look beautiful and function effectively, it will also be found by search engines'
  },
  {
    icon: Bs3SquareFill,
    title: 'Speed-Tested',
    text: 'A slow website will result in lost opportunities. Speed testing is therefore a key part of web development projects at Waterways Digital Ltd.'
  },
  {
    icon: Bs4SquareFill,
    title: 'Optimized for Conversions',
    text: 'Beautiful websites are great, but you know what’s better? Beautiful websites that convert website visitors to leads and customers!'
  },
  {
    icon: Bs5SquareFill,
    title: 'Backed by Data & Research',
    text: 'Your website strategy won’t be based on guesses and maybes. It will be based on facts, industry research, and validated data.'
  },
  {
    icon: Bs6SquareFill,
    title: 'Built with World-Class Tools',
    text: 'We leverage the best tools – WordPress, Shopify, Magento, Google Analytics, and many more – to deliver the results you need for your business.'
  },
]

export const PortfoilioContent = [
  {
    title: 'Fortune International',
    img: Animation
  },
  {
    title: 'Dee Peemer Beauty',
    img: Animation1
  },
  {
    title: 'Dee Peemer Beauty',
    img: Animation1
  },
  {
    title: 'Fortune International',
    img: Animation
  },
]

export const PortfoilioContent1 = [
  {
    title: 'Fortune International',
    img: Animation1
  },
  {
    title: 'Dee Peemer Beauty',
    img: Animation
  },
  {
    title: 'Dee Peemer Beauty',
    img: Animation
  },
  {
    title: 'Fortune International',
    img: Animation1
  },
]
export const PortfoilioImage = [
  {
    img: Rectangle26,
    dir: 'fade-left'
  },
  {
    img: Rectangle27,
    dir: 'fade-left'  },
  {
    img: Rectangle28,
    dir: 'fade-left'  },
  {
    img: Rectangle29,
    dir: 'fade-left'  },
  {
    img: Rectangle30,
    dir: 'fade-left'  },
  {
    img: Rectangle31,
    dir: 'fade-right'  },
  {
    img: Rectangle32,
    dir: 'fade-right'  },
  {
    img: Rectangle33,
    dir: 'fade-right'  },
  {
    img: Rectangle34,
    dir: 'fade-right'  },
  {
    img: Rectangle35,
    dir: 'fade-right'  },
]