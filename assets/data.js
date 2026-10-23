// Site content for AKD 30.0. Edit here to update dates, deadlines, the board and food spots.
window.AKD = {
  edition: "30.0",
  date: "2027-02-20",
  dateLabel: "February 20, 2027",
  venue: "John H. Gattis–Wendell Tabb Theater",
  instagram: "https://www.instagram.com/uncakd/",
  // From the "Applications are live" post. Deadlines are 11:59 PM Eastern.
  apply: {
    fusion: "OneLegends",
    bhangra: "Ekta",
    regular: { label: "10.30.26", at: "2026-10-30T23:59:00-04:00" },
    latest: { label: "11.5.26", at: "2026-11-05T23:59:00-05:00" }
  },
  // Board committees, shown on board.html in this order. Photos live in assets/board/;
  // a committee with img: null shows a "Photo coming soon" print until its photo is added.
  // members lists names left to right as they stand in the photo. For a photo with two rows,
  // use an object of rows instead, e.g. { "Back row": [...], "Front row": [...] }.
  crew: [
    { committee: "Directors", img: "directors.jpg", members: ["Esha Singaraju", "Devin Patel", "Spriha Manjigani"] },
    { committee: "Head Liaison", img: "head-liaison.jpg", members: ["Ayanna Sharma", "Moksha Nemalipuri", "Joanna Hu"] },
    { committee: "Finance", img: "finance.jpg", members: ["Rishika Jalagam", "Krish Shah", "Jayani Pitta"] },
    { committee: "Hospitality", img: "hospitality.jpg", members: {
      "Back row": ["Aarav Gupta", "Anya Joshi", "Suhani Agarwal", "Sandhya Sathis"],
      "Front row": ["Neelasha Panda", "Nishita Kashyap"]
    } },
    { committee: "Judging", img: "judging.jpg", members: ["Rahi Patel"] },
    { committee: "Logistics", img: "logistics.jpg", members: ["Madhu Chinta", "Saanvi Veeramreddy", "Celeste Samuel", "Ruhi Roy"] },
    { committee: "Marketing & Design", img: "marketing-design.jpg", members: ["Jerin Mathew", "Aditi Satish", "Sravya Chebrolu"] },
    { committee: "Registration", img: "registration.jpg", members: ["Veda Muppala", "Manvika Mamidala"] },
    { committee: "Safety & Wellness", img: "safety-wellness.jpg", members: ["Nikita Chincholkar", "Rishima Mathur"] },
    { committee: "Social", img: "social.jpg", members: ["Nandini Guruprasadh", "Tanuj Devulapalli"] },
    { committee: "Tech", img: "tech.jpg", members: ["Sai Nagamalla", "Bhargav Madadi"] }
  ],
  // Food spots, shown on visit.html
  food: [
    { name: "Mediterranean Deli", note: "Big portions and a fast line. Reliable for teams.", maps: "https://www.google.com/maps?q=410+W+Franklin+St,+Chapel+Hill,+NC+27516" },
    { name: "Raising Cane's", note: "Quick tenders, easy for big groups.", maps: "https://www.google.com/maps?q=101+E+Franklin+St,+Chapel+Hill,+NC+27514" },
    { name: "IP3", note: "Classic late-night pizza on Franklin.", maps: "https://www.google.com/maps?q=508+W+Franklin+St,+Chapel+Hill,+NC+27516" },
    { name: "Cosmic Cantina", note: "Burritos after rehearsal.", maps: "https://www.google.com/maps?q=118+E+Franklin+St,+Chapel+Hill,+NC" },
    { name: "Top of the Hill", note: "Downtown staple for a full team dinner.", maps: "https://www.google.com/maps?q=100+E+Franklin+St,+Chapel+Hill,+NC" },
    { name: "Kipos Greek Taverna", note: "Sit-down with shared plates.", maps: "https://www.google.com/maps?q=1800+E+Franklin+St+%2316,+Chapel+Hill,+NC+27514" }
  ],
  daysUntil() {
    const target = new Date(this.date + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round((target - now) / 86400000));
  }
};
