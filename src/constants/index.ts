import Section1 from "../assets/section1.svg"
import Section2 from "../assets/loan.svg"
import Section3 from "../assets/section3.svg"
import Section4 from "../assets/section4.svg"
import detailsImg from "../assets/deal.png"
import bannerImage from "../assets/bannerImage.svg"
import merchantLogo from "../assets/storeimg.png"
import dealsImg from "../assets/dealsimg.png"
import faq from "../assets/FAQ.png"
import chat from "../assets/sms.png"
import call from "../assets/call.png"
import sms from "../assets/messages.png"
import gift from "../assets/gift.png"
import airtime from "../assets/airtime.png"
import credit from "../assets/credit.png"
import voucher from "../assets/voucher.png"
import refer from "../assets/refer.png"
import msg from "../assets/msg.svg"


export const NavLinks = [
  { href: '/home', key: '/home', text: '' },
  { href: '/pro-users', key: 'Pro Users', text: 'Pro Users' },
  { href: '/socials', key: 'Socials', text: 'Socials' },
  { href: '/how-it-works', key: 'How it works', text: 'How it works' },
  { href: '/contact', key: 'Contact', text: 'Contact' },
];


export const footerLinks = [
  {
    title: 'Company',
    links: [
      { href: '/pro-users', key: 'Pro Users', text: 'Pro Users' },
      { href: '/how-it-works', key: 'How it works', text: 'How it works' },
      { href: '/contact', key: 'Contact', text: 'Contact' },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/contact', key: 'Contact', text: 'Contact' },
      { href: '/terms-and-condition', key: 'Terms of uSE', text: 'Terms of Use' },
      { href: '/privacy-policy', key: 'Privacy Policy', text: 'Privacy Policy' },
    ],
  },
  // {
  //   title: 'Location',
  //   links: [
  //     'Olugbosi Street, Off Bishop Oluwole Street Victoria Island Lagos',

  //   ],
  // },
]

export const section1 = {
  label: "Motivate  friends and family with deals and task",
  title: "Your children to do basic daily tasks and reward them with points.",
  subtext: "With thepoints they accumulate from helping at home, they can obtain a gift, from a large list of items of their choice. This way, they learn the sense of responsabilities and associate them with fun, and the notion of being rewarded when they listen and do what you asked them to.",
  btnText: "Join for free",
  Image: Section1
}

export const section2 = {
  label: "Reward friends and family with exciting rewards",
  title: "Reward your friends for the very useful things they do for you on a daily basis.",
  subtext: "Experience the flexibility of Yulli Credit. Shop now and pay later with our convenient Yulli Credit feature. No more waiting – enjoy your purchases while managing your budget. ",
  btnText: "Join for free",
  Image: Section2
}

export const section3 = {
  label: "Post  your events and  status as a pro user",
  title: "Yulli helps you sharing photos and videos about your events, stories and shows",
  subtext: "Connect with friends, family, and other users by following their accounts and engaging with their content. Share Phone and images of your shows and events",
  btnText: "Join for free",
  Image: Section3
}

export const section4 = {
  label: "Purchase discounted items from our the Yullistore",
  title: "Get gifts  & vouchers from your favorite stores ",
  subtext: "Purchase discounted  items from the yulli store and give as gifts to friends and family",
  btnText: "Join for free",
  Image: Section4
}

export const faqHeroSection = 
  {
    text: "Frequently asked question on Yulli",
    title: "How do I get started with yulli.com?",
    subtext: "To get started with yulli.com, simply download the app from the App Store or Google Play Store, create an account, and start exploring! You can search for users who share your interests, join groups related to your hobbies, and start chatting with other members.",
    Image: faq
  }

export const faqSection = [
  {
    text: "Frequently asked question about Yulli",
    title: "How do I get started with yulli.com?",
    subtext: "To get started with yulli.com, simply download the app from the App Store or Google Play Store, create an account, and start exploring! You can search for users who share your interests, join groups related to your hobbies, and start chatting with other members.",
  },
  {
    text: "Frequently asked question about Yulli",
    title: "Is yulli.com free to use?",
    subtext: "Yes, yulli.com is completely free to use. There are no hidden fees or charges.",
    Image: faq
  },
  {
    text: "Frequently asked question about Yulli",
    title: "How do I find other users who share my interests?",
    subtext: "To find other users who share your interests, simply use the search function in the app to search for keywords related to your hobbies. You can also browse groups related to your interests and join them to connect with other members.",
    Image: faq
  },
  {
    text: "Frequently asked question about Yulli",
    title: "Can I create my own group on yulli.com?",
    subtext: "Yes, you can create your own group on yulli.com. Simply click on the Create Group button in the app and follow the prompts to set up your group.",
    Image: faq
  }
] 

export const aboutUs = {
  text: "Yulli has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
}


export const bannerSection = {
  title: "Elevate your shopping experience with the Yulii",
  text: "Your gateway to unbeatable deals, rewards, and convenience right at your fingertips",
  image: bannerImage
}

export const dealSection = {
  title: "Discover Deals, Earn Points and Get rewarded.",
  text: "Your children can do basic daily tasks and reward them with points. With the points they accumulate from helping at home, they can obtain a gift, from a large list of items of their choice..",
  image: gift
}

export const FaqLinks = [
  { name: "Deals on Yulli ", href: "/" },
  { name: "How to become a Yulli Merchant", href: "/" },
  { name: "General Questions", href: "/" },
  { name: "Referral Program", href: "/" },
  { name: "Security and Privacy", href: "/" },
  { name: "Legal and Compliance", href: "/" },
]

//   export const dealsHeroSection = {
//     title: "Discover unbeatable deals and offers from your favorites store.",
//     text: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
//     image: Img
//   }


//   export const dealCategories = ["All categories", "Restaurants & bars", "Health & beauty", "Fashion", "Shoes"]

export const dealsDetails = {
  label: "Earn ₦1,000 Cashback",
  timeLabel: "Deal ends in 4 days",
  merchantLogo: merchantLogo,
  merchantName: "Coldstone creamery ice creams",
  merchantEmail: "coldstonecreamy_ng",
  text: "Buy 2 cups of ice cream for ₦3000 and earn up to ₦1000 cashback and other free goodies ",
  subtext: "Cold Stone Creamery presents a world of exquisite ice cream creations that will tantalize your taste buds and melt your heart.",
  btnText: "Claim this offer",
  Image: detailsImg,
}

export const productsData = [
  {
    id: 1,
    name: 'cloth',
    category: "Fashion",
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 2,
    name: 'shoe',
    category: "Health & Beauty",
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 3,
    category: "Restaurants & bars",
    name: 'vodka',
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 3,
    category: "Fashion",
    name: 'cream',
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  }
]

//   export const merchantCard = {
//     merchantLogo: img,
//     thumbNail: img,
//     title: "The palms shopping mall",
//     text: "They offer discounts and slash prices on all products from all deals and discounts....",
//     link: "View offer available"
// }
//   export const comment = [{
//     comments: "Yulli has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
//   }]

//   export const accountandregistration = {
//     items: [
//       { name: "Deals on Yulli ", href: "/" },
//       { name: "How to become a Yulli Merchant", href: "/" },
//       { name: "General Questions", href: "/" },
//       { name: "Referral Program", href: "/" },
//       { name: "Security and Privacy", href: "/" },
//       { name: "Legal and Compliance", href: "/" },
//     ],
//     faq: [
//       {
//         title: 'What is Yulli ?',
//         text: "Yulli is a marketplace and reward platform that offers great deals, exclusive rewards, and a range of services from your favorite stores. We're dedicated to making your shopping experience enjoyable and rewarding."
//       },
//     ]
//   }
export const contact = {
  title: "We're here to help! Contact us for any inquiries or assistance.",
  subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
  items: [
    {
      id: 1,
      icon: chat,
      caption: 'Chat with Us',
      text: "Look for the chat bubble icon at the bottom right corner of your screen. Simply click on it to initiate a chat session with us. Alternatively you can a dedicated support ticket system here"
    },
    {
      id: 2,
      icon: call,
      caption: 'Give us a call',
      text: "Give us a call or send us a WhatsApp message. We're just a phone call away, ready to provide you with the support you need (+234-234-567-90). "
    },
    {
      id: 3,
      icon: sms,
      caption: 'Chat with Us',
      text: "Have a question or need assistance? We're just an email away. Drop us a message, and our dedicated support team will get back to you promptly help.yulligames.com"
    },
  ]
};

export const moreWays = {
  title: "We're here to help! Contact us for any inquiries or assistance.",
  subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
  items: [
    {
      id: 1,
      icon: airtime,
      "backgroundColor": "bg-section2Label",
      caption: 'Publish production yulii store',
      text: "Everytime you pay your bills using Yulli you earn Yulli points that can convert to cash"
    },
    {
      id: 2,
      icon: voucher,
      "backgroundColor": 'bg-secondary',
      caption: 'Post event , shows and stories on Yulii socials',
      text: "Everytime you pay your bills using Yulli you earn Yulli points that can convert to cash"
    },
    {
      id: 3,
      icon: refer,
      "backgroundColor": "bg-[#efefff]",
      caption: 'Refer your buddies and get points and rewards',
      text: "Everytime you pay your bills using Yulli you earn Yulli points that can convert to cash"
    },
    {
      id: 4,
      icon: credit,
      "backgroundColor": "bg-[#effef0]",
      caption: 'Become a pro account and get lots more from yulli',
      text: "Everytime you pay your bills using Yulli you earn Yulli points that can convert to cash"
    },
  ]
};

export const howItWorks = [
  {
    title: "Sign up and get rewarded every time you shop.",
    text: "you're new here, sign up for a Yulli account. If you're an existing user, simply log in to access your account to start earning when you shop at your favorites store.",
    Image: dealsImg
  },
  {
    title: "Pick Your Favorites stores so you can see their offers first.",
    text: "🔍 Dive into our treasure trove of deals, gift cards, and exclusive rewards. Browse through an array of categories, from fashion to electronics, and discover discounts and cashbacks that'll make your wallet smile.",
    Image: dealsImg
  },
  {
    title: "Explore our offers, select a deal that suits your needs.",
    text: "Found a deal or offer that caught your eye? Click on it to view the details. If you're interested, proceed to make payment to claim your reward.",
    Image: dealsImg
  },
  {
    title: "Choose your preferred option to claim your rewards.",
    text: "Select how you want to receive your order. You can either: Pickup at a nearby store where your reward is available. Request a delivery wait for your order to be delivered right to your doorstep. Easy-peasy right ?",
    Image: dealsImg
  },
]

export const merchantItems = {
  heroSection : {
    title:"The ultimate marketplace and reward platform designed to elevate your business to new heights",
    text:"With Yulli, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences.",
    heading1: "Effortless Order History",
    subText1:"Simplify your order management process. Our intuitive platform allows you to keep track of your order history, manage deliveries & pickups, and enhance the shopping experience for your customers.",
    heading2: "The ultimate marketplace and reward platform designed to elevate your business to new heights",
    subText2: "With Yulli, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences.",
  },
  testimony: {
    title: "Sisyphus",
    text: "At TechHub Electronics, we were searching for ways to connect with tech enthusiasts who share our passion. Yulli's platform not only allowed us to showcase our latest gadgets but also empowered us to create promotions that resonated with our customers. The result? A loyal customer base that eagerly anticipates our new releases and special deals. - David Chen, CEO of TechHub Electronics",
    name:"Candice Wu",
    designation: "Store Manager, Sisyphus"
  },
  items: [
    {
      id: 1,
      icon: msg,
      title: 'Reach an Expansive Audience',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Yulli's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
    {
      id: 2,
      icon: msg,
      title: 'Streamlined Business Management',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Yulli's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
    {
      id: 3,
      icon: msg,
      title: 'Comprehensive Analytics:',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Yulli's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
  ]
}

import {Users2, ArrowDown, ArrowUp, BarChart2, ShoppingCart} from "lucide-react"

export const orderData = [
  {
    products: "Buy 2 get 1 free",
    orderID: "114527",
    customeeDetails: "Hope Samuel",
    status: "Active",
    offerType: "",
    amount: "5000"
  },

]

export const overviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"stone-200",
    color2: "red-500",
    iconColor: "stone-800"
  },
  {
    icon: BarChart2 ,
    icon2: ArrowUp,
    text: "Total Store Visit",
    percentage: "10",
    color: "green-50",
    amount: "500,000",
    iconBGColor:"purple-50",
    color2: "green-500",
    iconColor: "purple-300"
  },
  {
    icon: ShoppingCart ,
    icon2: ArrowUp,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-500",
    amount: "500,000",
    iconBGColor:"indigo-100",
    color2: "green-500",
    iconColor: "indigo-800"
  },
]


export const singleOverviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"red-500",
    color2: "red-500",
    iconColor: ""
  },
  {
    icon: BarChart2 ,
    icon2: ArrowUp,
    text: "Total Store Visit",
    percentage: "10",
    color: "green-50",
    amount: "500,000",
    iconBGColor:"purple-50",
    color2: "green-500",
    iconColor: "purple-300"
  },
 
]

export const invoiceOverviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"red-500",
    color2: "red-500",
    iconColor: ""
  },
  
]

export const storeOverviewTableData = {
  data: [
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" }
  ],
  headers: ["products", "orderID", "customerDetails", "status", "amount"]
}

export const orderHistoryTableData = {
  data: [
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Delivery", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Pickup", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Delivery", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Pickup", status: "Active", amount: "5000"}
  ],
  headers: ["products", "orderID", "customerDetails", "status", "offerType", "amount"],
  color:["red-500", "blue-500"],
  searchBy: ["All orders", "Today", "Yesterday", "This week", "Last week", "Last 30 days", "This year"]
}

export const customerTableData = {
  data: [
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
  ],
  headers: ["rank", "name", "email", "contact", "totalSpent"]
}

export const items = [
  {
    id: 1, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pending offers',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 2, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Approved"
  },
  {
    id: 3, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Expired',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 4, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pause',
    price: "5000",
    status: "Approved"
  },
  {
    id: 5, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pending offers',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 6, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Approved"
  },
  {
    id: 7, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Expired',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 8, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pause',
    price: "5000",
    status: "Approved"
  },
  {
    id: 9, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Pending approval"
  },
  
];