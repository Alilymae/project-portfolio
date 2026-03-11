// Year 1 Projects in order::
// 1. Buzzfeed's Tasty Website (2024)
import project1 from "@/assets/project-1.png";
import project1_1 from "@/assets/project-1.1.png";
import project1_2 from "@/assets/project-1.2.png";
import project1_3 from "@/assets/project-1.3.png";
import project1_4 from "@/assets/project-1.4.png";
import project1_5 from "@/assets/project-1.5.png";

// 2. TastyTales Prototype (2024)
import project2 from "@/assets/project-2.png";
import project2_1 from "@/assets/project-2.1.png";
import project2_2 from "@/assets/project-2.2.png";
import project2_3 from "@/assets/project-2.3.png";
import project2_4 from "@/assets/project-2.4.png";
import project2_5 from "@/assets/project-2.5.png";
import project2_6 from "@/assets/project-2.6.png";
import project2_7 from "@/assets/project-2.7.png";

// 3. Red Hood - Interacive Story (2024)
import project3 from "@/assets/project-3.png";
import project3_1 from "@/assets/project-3.1.png";
import project3_2 from "@/assets/project-3.2.png";
import project3_3 from "@/assets/project-3.3.png";
import project3_4 from "@/assets/project-3.4.png";
import project3_5 from "@/assets/project-3.5.png";

// 4. Orpheus and Eurydice (2024)
import project4 from "@/assets/project-4.png";
import project4_1 from "@/assets/project-4.1.png";
import project4_2 from "@/assets/project-4.2.png";
import project4_3 from "@/assets/project-4.3.png";
import project4_4 from "@/assets/project-4.4.png";
import project4_5 from "@/assets/project-4.5.png";

// 5. P5JS  Portfolio
import project5 from "@/assets/project-5.png";

// 6. Eurydice 
import project6 from "@/assets/project-6.png";
import project6_1 from "@/assets/project-6.1.png";
import project6_2 from "@/assets/project-6.2.png";
import project6_3 from "@/assets/project-6.3.png";
import project6_4 from "@/assets/project-6.4.png";
import project6_5 from "@/assets/project-6.5.png";

// 7. Wafflicious
import project7 from "@/assets/project-7.png";
import project7_1 from "@/assets/project-7.1.png";
import project7_2 from "@/assets/project-7.2.png";
import project7_3 from "@/assets/project-7.3.png";
import project7_4 from "@/assets/project-7.4.png";

// 8. Mi Cafe
import project8 from "@/assets/project-8.png";
import project8_1 from "@/assets/project-8.1.png";
import project8_2 from "@/assets/project-8.2.png";
import project8_3 from "@/assets/project-8.3.png";
import project8_4 from "@/assets/project-8.4.png";
import project8_5 from "@/assets/project-8.4.png";

// 9. DialogFlow Chatbot
import project9 from "@/assets/project-9.png";
import project9_1 from "@/assets/project-9.1.png";
import project9_2 from "@/assets/project-9.2.png";
import project9_3 from "@/assets/project-9.3.png";

// 10. Storia - A Roman Empire History (2025)
import project10 from "@/assets/project-10.png";
import project10_1 from "@/assets/project-10.1.png";
import project10_2 from "@/assets/project-10.2.png";
import project10_3 from "@/assets/project-10.3.png";
import project10_4 from "@/assets/project-10.4.png";
import project10_5 from "@/assets/project-10.5.png";

// 11. Artificial Elegance Website (2025)
import project11 from "@/assets/project-11.png";
import project11_1 from "@/assets/project-11.1.png";
import project11_2 from "@/assets/project-11.2.png";
import project11_3 from "@/assets/project-11.3.png";
import project11_4 from "@/assets/project-11.4.png";
import project11_5 from "@/assets/project-11.5.png";

// 12. Medical Insurance Cost Evaluation: Using Linear Regression (2025)
import project12 from "@/assets/project-12.png";

// 13. The Risk of Diabetes: Using Logistic Regression (2025)
import project13 from "@/assets/project-13.png";

// 14. Cats vs. Dogs Image Classification (2025)
import project14 from "@/assets/project-14.png";

// 15. Imagix Cinemas (2025)
import project15 from "@/assets/project-15.png";
import project15_1 from "@/assets/project-15.1.png";
import project15_2 from "@/assets/project-15.2.png";
import project15_3 from "@/assets/project-15.3.png";
import project15_4 from "@/assets/project-15.4.png";
import project15_5 from "@/assets/project-15.5.png";



export type Project = {
  slug: string;
  num: string;
  title: string;
  role: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  stack: string[];
  images: string[];
  link?: string;
  overview?: string;
  responsibilities?: string[];
};

export const projects: Project[] = [
  {
    slug: "imagix-cinemas",
    num: "15",
    title: "Imagix Cinemas",
    role: "Project Developer & Designer",
    year: "2025",
    description:
      "Imagix Cinema is a full-stack web application designed with a similar feel to Netflix, while providing users with movie information and practical cinema booking.",
    longDescription:
      "Imagix Cinema is a full-stack web application designed with a similar feel to Netflix, while providing users with movie information and practical cinema booking. The main goal of this website was to give up-to-date movie/series information, allowing users to make informed decisions before booking in cinemas. By using TMBD (The Movie Database) API, Imagix offers real-time data, including casts, trailers, and recommendations, creating an informative user experience.",
    tags: ["MERN Stack", "REST APIs", "Render"],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    images: [project15, project15_1, project15_2, project15_3, project15_4, project15_5],
    link: "https://imagix-frontend-5151.onrender.com/",
    overview: "Imagix Cinema represents a comprehensive full-stack solution that bridges the gap between traditional cinema experiences and modern web technology. This project demonstrates advanced integration of movie database APIs with user-centric design, creating an intuitive platform for movie discovery and booking.",
    responsibilities: [
      "Full-stack development",
      "API integration (TMDB)",
      "UI/UX design",
      "Database architecture"
    ],
  },
  {
    slug: "cats-vs-dogs-image-classification",
    num: "14",
    title: "Cats vs. Dogs Image Classification",
    role: "Machine Learning Developer",
    year: "2025",
    description:
      "A computer vision project that classifies images of cats and dogs using Histogram of Oriented Gradients (HOG) feature extraction and a Logistic Regression classifier.",
    longDescription:
      "This project explores a traditional computer vision approach to image classification by distinguishing between cat and dog images. Instead of using deep learning, the system combines Histogram of Oriented Gradients (HOG) for feature extraction with a Logistic Regression classifier to identify visual patterns in images. The dataset contains over 25,000 labeled images which were resized, converted to grayscale, and transformed into numerical feature vectors using HOG descriptors. The model was trained using an 80/20 train–test split and evaluated through accuracy metrics and confusion matrix analysis. The final model achieved 73% accuracy, outperforming an earlier K-Nearest Neighbors model which achieved 52%. The trained classifier was also deployed through a simple Gradio interface, allowing users to upload images and receive real-time predictions.",
    tags: ["Machine Learning", "Image Classification", "Data Science"],
    stack: ["Python", "OpenCV", "Scikit-learn", "NumPy", "Matplotlib", "Gradio", "Kaggle"],
    images: [project14],
    link: "https://www.kaggle.com/code/aliahmae/cats-vs-dogs-image-classification",
    overview: "A computer vision project that uses HOG feature extraction and Logistic Regression to classify cat and dog images, demonstrating a traditional machine learning pipeline for image classification.",
    responsibilities: [
      "Data Prepocessing",
      "Feature Extraction",
      "Model Training and Evaluation",
      "Model Deployment"
    ],
  },
  {
    slug: "the-risk-of-diabetes-using-logistic-regression",
    num: "13",
    title: "The Risk of Diabetes: Using Logistic Regression",
    role: "Data Analyst / Machine Learning Developer",
    year: "2025",
    description:
      "A machine learning project that predicts the likelihood of diabetes using patient health data and classification models.",
    longDescription:
      "This project focuses on predicting diabetes risk using a healthcare dataset containing over 10,000 records with features such as age, BMI, blood glucose levels, HbA1c levels, hypertension, and smoking history. Data preprocessing involved cleaning the dataset, handling duplicates and missing values, converting categorical variables, and standardizing numerical features. A Logistic Regression model was trained to classify diabetes outcomes, and performance was evaluated using metrics including accuracy, precision, recall, F1-score, and confusion matrix analysis. To further analyze influential features, a Decision Tree Classifier was also applied. Evaluation through ROC curves and Precision–Recall curves demonstrated strong model performance, highlighting blood glucose levels, HbA1c, and BMI as key predictors.",
    tags: ["Machine Learning", "Data Analysis", "Healthcare Data", "Predictive Modeling"],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Kaggle"],
    images: [project13],
    link: "https://www.kaggle.com/code/aliahmae/the-risk-of-diabetes-using-logistic-regression",
    overview: "A machine learning classification project that predicts diabetes risk using Logistic Regression and Decision Tree models on healthcare data.",
    responsibilities: [
      "Model evaluation",
      "Data preprocessing",
      "Feature engineering",
      "Model training and testing"
    ],
  },
  {
    slug: "medical-insurance-cost-evaluation",
    num: "12",
    title: "Medical Insurance Cost Evaluation: Using Linear Regression",
    role: "Data Analyst / Machine Learning Developer",
    year: "2025",
    description:
      "A data analysis project that predicts medical insurance costs using a Linear Regression model trained on health-related variables such as age, BMI, smoker status, and region.",
    longDescription:
      "This project explores the prediction of medical insurance charges using a Linear Regression model. The dataset contains over 1000 records with both numerical and categorical variables including age, gender, BMI, number of children, smoker status, and region. Data preprocessing included handling duplicates and missing values, encoding categorical variables using one-hot encoding, and applying feature scaling with Standard Scaler. The dataset was split into training and testing sets to evaluate model performance. The model was assessed using Mean Squared Error, Mean Absolute Error, and R² score. Results showed that the model successfully captured relationships within the data, with smoker status and BMI having the strongest impact on insurance costs.",
    tags: ["Machine Learning", "Data Analysis", "Predictive Modeling", "Healthcare Data"],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Kaggle"],
    images: [project12],
    link: "https://www.kaggle.com/code/aliahmae/medical-insurance-cost-evaluation-regression",
    overview: "A machine learning project focused on predicting medical insurance costs using Linear Regression and healthcare-related features.",
    responsibilities: [
      "Model evaluation",
      "Data preprocessing",
      "Feature engineering",
      "Model training and testing"
    ],
  },
  {
    slug: "artificial-elegance-website",
    num: "11",
    title: "Artificial Elegance Website",
    role: "Project Manager / Lead Developer",
    year: "2025",
    description:
      "Developed for the small business Artificial Elegance, this full-stack e-commerce website was built using the MERN stack to increase the business's online presence and customer reach, featuring user authentication, a cart system, and a responsive design.",
    longDescription:
      "The project's primary purpose was to help the small business Artificial Elegance increase its online presence and expand its market reach. By developing a full-stack website using the MERN stack, the team aimed to connect the brand online and make it accessible to potential customers from other emirates, moving beyond its current customer base limited to Ajman and Sharjah.",
    tags: ["MERN Stack", "Figma", "UX/UI Design"],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    images: [project11, project11_1, project11_2, project11_3, project11_4, project11_5],
    link: "https://artificialelegancewebsite.onrender.com/",
    overview: "The conceptual focus of the project was to build a functional and user-friendly website for the business, while also creating a visual identity that reflects the brand's values and aesthetic. The design process involved extensive research and iteration to ensure that the final product not only meets the functional requirements but also resonates with the target audience.",
    responsibilities: [
      "Project management",
      "Front-end & back-end development",
      "UI/UX design"
    ],
  },
  {
    slug: "storia-roman-empire-history",
    num: "10",
    title: "Storia - A Roman Empire History",
    role: "Project Developer & Designer",
    year: "2025",
    description:
      "Storia is an interactive educational website about the history of ancient Rome and its influence on the modern world. Built with MERN Stack, it features responsive design, engaging visuals, and a developing login system for accessing exclusive content.",
    longDescription:
      "Storia is an interactive educational website about the history of ancient Rome and its influence on the modern world. Built with MERN Stack, it features responsive design, engaging visuals, and a developing login system for accessing exclusive content. The project aims to provide an immersive learning experience through interactive timelines, multimedia content, and user-friendly navigation.",
    tags: ["MERN Stack", "Responsive Design", "UI Animation"],
    stack: ["React JS", "Node.js", "Express.js", "MongoDB"],
    images: [project10, project10_1, project10_2, project10_3, project10_4, project10_5],
    link: "https://webdev-ii-aliah-maes-projects.vercel.app/",
    overview: "Storia is a full-stack educational platform designed to make learning about ancient Rome interactive and visually engaging. The project focuses on combining modern web technologies with strong visual design to create a responsive and immersive historical learning experience.",
    responsibilities: [
      "Project Development",
      "UI/UX design",
      "User Authentication System",
      "Responsive Layout"
    ],
  },
  {
    slug: "chatbot",
    num: "09",
    title: "DialogFlow Chatbot - Sofié",
    role: "Developer",
    year: "2025",
    description:
      "A conversational AI chatbot that acts as a virtual barista, helping users browse the café menu and place orders through a chat-based interface.",
    longDescription:
      "Sofié – The Virtual Barista is a conversational AI chatbot created for the MiCafè coffee shop concept. The chatbot acts as a digital barista, greeting users, presenting menu options, and guiding them through the ordering process using a conversational interface. The project explores how chatbots can function as virtual assistants in service environments such as cafés. The chatbot interface was developed using Dialogflow, while visual assets such as the café menu and branding elements were designed in Canva.",
    tags: ["Conversational AI", "DialogFlow Chatbot", "UX Design", "AI Assistant"],
    stack: ["Dialogflow", "Chatbot Training", "Canva"],
    images: [project9, project9_1, project9_2, project9_3],
    link: "https://micafe.vercel.app/",
    overview: "Sofié – The Virtual Barista is a conversational AI chatbot designed to simulate the experience of ordering at a coffee shop. Built for the MiCafè concept, the chatbot welcomes users, displays the menu, and assists with placing drink or snack orders through a natural conversation interface.",
    responsibilities: [
      "Conversational AI",
      "DialogFlow Development",
      "AI Chatbot Training",
    ],
  },
  {
    slug: "mi-cafe",
    num: "08",
    title: "Mi Cafe - A Coffee Shop App",
    role: "App Developer & Designer",
    year: "2025",
    description:
      "A multi-page café app that allows users to browse drinks and snacks while providing a personalized and cozy digital coffee shop experience.",
    longDescription:
      "MiCafe is a multi-page café application designed as a digital extension of a previously developed coffee shop website. The app allows users to browse through a selection of drinks and snacks while maintaining the warm and relaxing atmosphere of a café environment. The interface features a clean and minimal layout with a soft color palette to reflect the calm ambiance of a coffee shop. The app also includes a login page that enables personalized greetings for users, creating a more customized experience while exploring the menu.",
    tags: ["App Development", "UI/UX Design", "Mobile App Design"],
    stack: ["Kotlin", "Android Studio", "UI/UX Design"],
    images: [project8, project8_1, project8_2, project8_3, project8_4, project8_5],
    link: "",
    overview: "MiCafe is a multi-page café app designed to recreate the cozy and welcoming atmosphere of a coffee shop in a digital experience. The app allows users to browse a variety of drinks and snacks, while a login system provides personalized greetings and a more tailored user experience.",
    responsibilities: [
      "Mobile App Development",
      "UI/UX Design",
      "Brand Design"
    ],
  },
  {
    slug: "wafflicious",
    num: "07",
    title: "Wafflicious",
    role: "App Developer & Designer",
    year: "2025",
    description:
      "A playful Nan Calculator app that lets users create waffle combinations through an interactive and visually engaging interface.",
    longDescription:
      "Wafflicious is an interactive Nan Calculator app designed to turn a simple calculation concept into a fun and engaging experience. Users can build their own waffle combinations by selecting a waffle base and pairing it with different ingredients such as fruits, desserts, and dairy toppings. The app features a colorful, cartoon-inspired design that gives it a lighthearted and game-like feel. By combining visuals and sound effects, the project aims to create an entertaining kitchen-themed experience while demonstrating creative interface design.",
    tags: ["App Development", "Interactive Design", "UI/UX Design"],
    stack: ["Kotlin", "Android Studio", "UI/UX Design"],
    images: [project7, project7_1, project7_2, project7_3, project7_4],
    link: "",
    overview: "Wafflicious is a Nan Calculator app that's fun and interactive designed to let users explore different waffle combinations through a simple interface. In the app, users can select a waffle and pair it with different ingredients from the rack varying from fruits, dessert, and dairy items.",
    responsibilities: [
      "Mobile App Development",
      "UI/UX Design",
      "Interactive Design",
      "Sound Design"
    ],
  },
  {
    slug: "eurydice",
    num: "06",
    title: "Eurydice",
    role: "Game Developer",
    year: "2025",
    description:
      "A story-driven pixel platformer built in Unity where players control Orpheus as he journeys through the Underworld to rescue Eurydice from Hades.",
    longDescription:
      "Eurydice is a pixel-art platformer developed in Unity and inspired by the Greek myth of Orpheus and Eurydice. The game reimagines Orpheus as a swordsman who travels through the Underworld in search of Eurydice after she is taken by Hades. Players progress through multiple levels featuring environmental hazards, NPC interactions, and narrative dialogue that expands on the myth. The project explores storytelling through gameplay while combining platforming mechanics with a reinterpretation of a classic mythological tale.",
    tags: ["Game Development", "Platformer", "Pixel Art", "Story-Driven", "Mythology"],
    stack: ["Unity", "C#", "Pixel Art", "Game Design", "Level Design"],
    images: [project6, project6_1, project6_2, project6_3, project6_4, project6_5],
    link: "https://alily-mae.itch.io/eurydice",
    overview: "A story-driven pixel platformer inspired by the Greek myth of Orpheus and Eurydice. Players control Orpheus as he ventures through the Underworld to rescue Eurydice, overcoming environmental challenges, enemies, and narrative encounters along the way.",
    responsibilities: [
      "Level Design",
      "C# Scripting",
      "Pixel Art Creation",
      "Narrative Development"
    ],
  },
  {
    slug: "p5js-portfolio",
    num: "05",
    title: "P5JS Experiments",
    role: "Creative Coder",
    year: "2024",
    description:
      "A compilation of P5JS sketches and interactive experiments that explore generative art, procedural animation, and creative coding techniques.",
    longDescription:
      "",
    tags: ["P5JS", "Creative Coding"],
    stack: ["P5JS", "JavaScript"],
    images: [project5],
    link: "https://sway.cloud.microsoft/lWJDfsLH2VDb1zG9",
    overview: "The sway portfolio contains a collection of P5JS sketches and interactive experiments that explore generative art, procedural animation, and creative coding techniques. The portfolio showcases a variety of projects that demonstrate the versatility of P5JS as a tool for creative expression and experimentation in the realm of digital art.",
    responsibilities: [
      "Creative Coding",
    ],
  },
  {
    slug: "orpheus-eurydice",
    num: "04",
    title: "Orpheus and Eurydice - A Bitsy Game",
    role: "Game Developer",
    year: "2024",
    description:
      "A pixel-art adventure story game built with Bitsy that reimagines the Greek myth of Orpheus and Eurydice, following Orpheus’s journey into the Underworld to save his lost lover.",
    longDescription:
      "This project is a narrative-based pixel game built in Bitsy that retells the myth of Orpheus and Eurydice. Players follow Orpheus as he travels into the Underworld in an attempt to save his lover after her tragic death. The game focuses on simple exploration and storytelling, using minimal visuals and dialogue to guide the player through the story. It explores how classic myths can be adapted into interactive experiences while working within the limitations of a lightweight game engine.",
    tags: ["Interactive Storytelling", "Pixel Art", "Game Development"],
    stack: ["Bitsy", "Twine", "JavaScript"],
    images: [project4, project4_1, project4_2, project4_3, project4_4, project4_5],
    link: "https://alily-mae.itch.io/orpheus-eurydice-story-retold",
    overview: "This project is a pixel-art story game created using Bitsy, inspired by the Greek myth of Orpheus and Eurydice. The game follows Orpheus as he journeys into the Underworld to bring Eurydice back. The story was adapted to fit Bitsy’s simple mechanics while focusing on narrative and exploration.",
    responsibilities: [
      "Game Development",
      "Narrative Design",
      "Pixel Art Creation",
      "Bitsy Scripting"
    ],
  },
  {
    slug: "red-hood",
    num: "03",
    title: "Red Hood - An Interactive Story",
    role: "Story Developer",
    year: "2024",
    description:
      "A non-linear interactive story built in Twine where players take on the role of Red Hood, a huntress investigating cursed beings in a village while uncovering her past through branching narrative choices.",
    longDescription:
      "This project is an interactive narrative developed in Twine that reimagines the classic fairytale Little Red Riding Hood. Inspired by the dark fantasy tone of Hansel and Gretel: Witch Hunters (2013), the story places the player in the role of Red Hood, a skilled huntress hired by the village chief to eliminate cursed beings hiding among the townspeople. After completing her mission, Red Hood returns to the orphanage where the children ask her to recount her adventures. This moment triggers a flashback set ten years in the past, where the player begins to uncover the events that shaped her journey. Through branching paths and player choices, the story explores themes of mystery, danger, and the origins of the huntress.",
    tags: ["Interactive Storytelling", "Twine", "Generative AI"],
    stack: ["Twine", "JavaScript", "CSS3", "Gen AI"],
    images: [project3, project3_1, project3_2, project3_3, project3_4, project3_5],
    link: "https://alily-mae.itch.io/red-hood",
    overview: "TastyTales is a prototype for a modern recipe website inspired by BuzzFeed’s Tasty. The design focuses on creating a visually appealing and easy-to-navigate platform that showcases recipes through interactive galleries, multimedia content, and responsive layouts.",
    responsibilities: [
      "Interactive Story Development",
      "Narrative Design",
      "Branching Path Creation",
      "Twine Scripting"
    ],
  },
  {
    slug: "tastytales-prototype",
    num: "02",
    title: "TastyTales Prototype",
    role: "Project Developer & Designer",
    year: "2024",
    description:
      "A Figma mobile app prototype that helps users discover recipes and plan meals through a customizable and user-friendly cooking experience.",
    longDescription:
      "TastyTales is a mobile app prototype created in Figma that focuses on simplifying the cooking and meal planning experience. Users can explore a variety of recipes while organizing their meals through an integrated calendar and reminder system.The design prioritizes a clean and intuitive interface, allowing users to easily navigate between recipes, meal plans, and personalized settings such as dietary preferences or time management. The goal of the project was to create a user-friendly cooking companion that makes meal preparation more organized and accessible.",
    tags: ["Figma Prototyping", "UI/UX Design", "Mobile App Design"],
    stack: ["Figma", "UI/UX Design", "Interactive Prototyping"],
    images: [project2, project2_1, project2_2, project2_3, project2_4, project2_5, project2_6, project2_7],
    link: "https://www.figma.com/proto/Xzqnu8vbeFrJREQ9HGxJ69/app-draft?t=re6UWS6fn0PvcKY2-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=167-3189&starting-point-node-id=167%3A3189",
    overview: "TastyTales is a mobile cooking companion prototype designed in Figma that helps users discover recipes and organize their meals. The app combines recipe browsing with a built-in meal planning calendar and reminders, allowing users to manage their cooking schedule easily while exploring different cuisines.",
    responsibilities: [
      "Mobile App Design",
      "UI/UX Design",
      "Interactive Prototyping",
      "User Research"
    ],
  },
  {
    slug: "buzzfeed-tasty",
    num: "01",
    title: "Buzzfeed's Tasty Website",
    role: "Project Developer & Designer",
    year: "2024",
    description:
      "A multi-page recipe website inspired by BuzzFeed’s Tasty, featuring interactive UI elements, multimedia galleries, and responsive design built with HTML, CSS, and JavaScript.",
    longDescription:
      "This project recreates the style and functionality of the BuzzFeed Tasty website through a multi-page responsive web application. Built using HTML5, CSS, and JavaScript, the website includes interactive features such as hover effects, image sliders, recipe galleries, video galleries, and animated UI components. The project focuses on creating an engaging user experience through minimalistic design, multimedia integration, and intuitive navigation.",
    tags: ["Front-end Development", "UI Interaction", "Website Redesign"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    images: [project1, project1_1, project1_2, project1_3, project1_4, project1_5],
    link: "https://alilymae.github.io/",
    overview: "This project recreates a modern recipe website inspired by BuzzFeed’s Tasty. The goal was to design a visually appealing and easy-to-navigate platform that showcases recipes through interactive galleries, multimedia content, and responsive layouts.",
    responsibilities: [
      "Website Layout Design",
      "UI/UX Design",
      "Interactive Elements",
      "Responsive Design"
    ],
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);

