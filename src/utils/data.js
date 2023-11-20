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

export const homeCardContent = [
  {
    icon: BsLightbulb,
    title: "Creativity",
    text: "We believe in working hand in hand, aligning our expertise with your vision. Together, we co-create solutions that bring your ideas to life.",
  },
  {
    icon: BsGear,
    title: "Efficiency",
    text: "We are committed to optimizing processes, enhancing performance, and delivering solutions that save you time and resources.",
  },
  {
    icon: BsFillBrightnessHighFill,
    title: "Innovation",
    text: "Innovation is the cornerstone of our digital solution services. We're committed to breaking boundaries and pushing the limits of what's possible.",
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