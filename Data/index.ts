import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I turn code into real life projects!! ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on AI & ML",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "My Blogs",
      des: "Welcome to MyBlogs, your ultimate destination for diverse and insightful stories, thought-provoking ideas, and a vibrant community of passionate readers and writers..",
      img: "/Myblogs.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/code0adarsh/MyBlogs",
    },
    {
      id: 2,
      title: "Cube Game",
      des: "This is a simple 3D game implemented using Three.js. The player controls a cube and can move it using the WASD keys. The objective is to avoid collision with red enemy cubes that spawn over time. Pressing the 'Space' key makes the player cube jump. The game features gravity, realistic physics, and a restart option (press 'R').",
      img: "/cubeGame.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://code0adarsh.github.io/cube-game/",
    },
    // {
    //   id: 3,
    //   title: "AI Image SaaS - Canva Application",
    //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //   img: "/p3.svg",
    //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //   link: "",
    // },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "",
    // },
  ];
  
  export const testimonials = [
    {
      quote:
        "I cannot recommend Adarsh.dev enough! Their website offers such valuable and actionable advice for anyone looking to improve their online presence. Not only that, but their support team is top-notch and always willing to go above and beyond to help. The professionalism displayed by Adarsh.dev is truly impressive and sets them apart from other websites. Thank you for all the help and guidance, Adarsh.dev! Keep up the amazing work.",
      name: "Anubhav",
      title: "Client",
    },
    {
      quote:
        "I cannot recommend Adarsh.dev enough! Their website offers such valuable and actionable advice for anyone looking to improve their online presence. Not only that, but their support team is top-notch and always willing to go above and beyond to help. The professionalism displayed by Adarsh.dev is truly impressive and sets them apart from other websites. Thank you for all the help and guidance, Adarsh.dev! Keep up the amazing work.",
      name: "Gochi",
      title: "Client",
    },
    {
      quote:
        "I cannot recommend Adarsh.dev enough! Their website offers such valuable and actionable advice for anyone looking to improve their online presence. Not only that, but their support team is top-notch and always willing to go above and beyond to help. The professionalism displayed by Adarsh.dev is truly impressive and sets them apart from other websites. Thank you for all the help and guidance, Adarsh.dev! Keep up the amazing work.",
      name: "Sumeet",
      title: "Client",
    },
    {
      quote:
        "I cannot recommend Adarsh.dev enough! Their website offers such valuable and actionable advice for anyone looking to improve their online presence. Not only that, but their support team is top-notch and always willing to go above and beyond to help. The professionalism displayed by Adarsh.dev is truly impressive and sets them apart from other websites. Thank you for all the help and guidance, Adarsh.dev! Keep up the amazing work.",
      name: "Rahul",
      title: "Client",
    },
    {
      quote:
        "I cannot recommend Adarsh.dev enough! Their website offers such valuable and actionable advice for anyone looking to improve their online presence. Not only that, but their support team is top-notch and always willing to go above and beyond to help. The professionalism displayed by Adarsh.dev is truly impressive and sets them apart from other websites. Thank you for all the help and guidance, Adarsh.dev! Keep up the amazing work.",
      name: "Abhishek",
      title: "Client",
    },
  ];
  
  // export const companies = [
  //   {
  //     id: 1,
  //     name: "cloudinary",
  //     img: "/cloud.svg",
  //     nameImg: "/cloudName.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "appwrite",
  //     img: "/app.svg",
  //     nameImg: "/appName.svg",
  //   },
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "stream",
  //     img: "/s.svg",
  //     nameImg: "/streamName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
  // ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer- Jspiders",
      desc: "Programmed on Java , optimizing relational databases with SQL for a 50% increase in data retrieval speed, leading web development projects with React.js, and collaborating on practical application projects to enhance productivity by 55%.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Open Soure Contributor",
      desc: "Actively contributing to open source projects on GitHub and participating in Google Summer of Code (GSoC), optimizing codebases, improving project documentation, collaborating with global developers, and delivering impactful software solutions.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Dev Project",
      desc: "Working soloy on the dev for clients, from initial concept to deployment .",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Game Developer",
      desc: "Using lead techinologies like Unreal Engine, optimizing performance for smoother gameplay, leading projects to create immersive 3D environments, and collaborating on practical game development challenges to enhance creativity and technical skills.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/code0adarsh",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/codedemon5",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/adarshpradhan/",
    },
  ];