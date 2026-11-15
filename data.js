/* =========================================================
   Seeker of Story — site content
   To connect a real video: paste the YouTube video ID
   (the part after "watch?v=") into youtubeId.
   Leave youtubeId "" to show a placeholder.
   ========================================================= */
window.SOS = {
  // Site-wide settings
  settings: {
    youtubeChannel: "https://www.youtube.com/@SeekerofStory",   // TODO: confirm channel URL
    email: "hello@seekerofstory.org",                            // TODO: confirm inbox
    // Paste a form endpoint (e.g. Formspree, Make, Zapier webhook) to receive submissions.
    // Leave "" and forms will show a confirmation without sending anywhere.
    formEndpoints: { story: "", newsletter: "", community: "", contact: "", giving: "" },
    podcastLinks: {
      spotify: "#", apple: "#", youtube: "#"                     // TODO: add show links
    }
  },

  // Seeker profiles (SAMPLE people — replace with real storytellers)
  // Each seeker gets a profile page; their stories link back to them.
  seekers: [
    { id: "latoya-french", name: "Latoya French", city: "", headline: "Homeless and homebound", bio: "Latoya's story of overcoming. (Bio coming soon.)", sponsored: false },
    { id: "carrie-carter", name: "Carrie Carter", city: "Fort Worth, TX", headline: "Travel Tech Executive → Cowtown Tour Company", bio: "Carrie's founder story. (Bio coming soon.)", sponsored: false },
    { id: "lena-killion", name: "Lena Killion", city: "Fort Worth, TX", headline: "Aerospace Sales → Funeral Pre-Planning Entrepreneur", bio: "Something clicked when her grandmother passed away. (Full bio coming soon.)", sponsored: true,
      sponsor: { name: "MLK Pre-Arrangements", logo: "assets/mlk-logo.png", url: "https://mlkprearrangements.com", tagline: "Funeral pre-planning so your family can grieve in peace.", address: "1617 Park Place Ave., Suite 110-MLK, Fort Worth, TX 76110", email: "lena@mlkprearrangements.com", self: true } },
    { id: "jeremy-eubanks", name: "Jeremy Eubanks", city: "Oklahoma", headline: "Two men, sobriety & a divine ride", bio: "Oil field worker who came to Fort Worth for a race right after getting clean and sober, and celebrated with a night of boot scootin' in Cowtown. (Full bio coming soon.)", sponsored: false },
    { id: "maria-l", name: "Maria L.", city: "Fort Worth, TX", headline: "From rock bottom to purpose", bio: "Single mom, survivor, and now a mentor to women starting over.", sponsored: false },
    { id: "james-r", name: "James R.", city: "Dallas, TX", headline: "Founder building on faith", bio: "Left a corporate career to build a business that serves his neighborhood.", sponsored: false },
    { id: "angela-t", name: "Angela T.", city: "Arlington, TX", headline: "Starting over at 50", bio: "Proof that it's never too late to write the next chapter.", sponsored: false },
    { id: "david-m", name: "David M.", city: "Grand Prairie, TX", headline: "Breaking the cycle", bio: "Choosing a different story for his kids and grandkids.", sponsored: false }
  ],

  // Community giving (nonprofit). Links can point to Zeffy, Givebutter, PayPal Giving, etc.
  giving: {
    donateLink: "",            // TODO: paste your giving page link
    tiers: [
      { name: "Give Any Amount", price: "Any gift", text: "Keep the cameras rolling and the community growing.", cta: "Give" },
      { name: "Sponsor a Story", price: "Cover one story", text: "Pay for filming and producing someone else's story, so they can share it free.", cta: "Sponsor a Story", featured: true },
      { name: "Community Partner", price: "Monthly", text: "Businesses and founders who fund stories every month, with recognition on the site and in videos.", cta: "Become a Partner" }
    ]
  },

  categories: ["Transformation", "Business", "Overcoming", "Faith", "What's Next"],

  stories: [
    { id: "s1", title: "From Rock Bottom to Purpose", seekerId: "latoya-french", category: "Overcoming",
      summary: "How one season of loss became the starting line for a brand-new calling.",
      youtubeId: "", duration: "12:40", featured: true },
    { id: "s2", title: "Building a Business on Faith", seekerId: "carrie-carter", category: "Business",
      summary: "Leaving the corporate path to build something that serves the community.",
      youtubeId: "", duration: "18:05", featured: true },
    { id: "s3", title: "The Day Everything Changed", seekerId: "lena-killion", category: "Transformation",
      summary: "One honest conversation that turned a life around.",
      youtubeId: "", duration: "9:22", featured: true },
    { id: "s4", title: "Starting Over at 50", seekerId: "angela-t", category: "What's Next",
      summary: "It's never too late to write the next chapter.",
      youtubeId: "", duration: "14:10" },
    { id: "s5", title: "Grace in the Waiting Room", seekerId: "maria-l", category: "Faith",
      summary: "Finding peace while the answers were still on the way.",
      youtubeId: "", duration: "11:48" },
    { id: "s6", title: "From Side Hustle to Calling", seekerId: "james-r", category: "Business",
      summary: "Turning a weekend idea into work that matters.",
      youtubeId: "", duration: "16:30" },
    { id: "s7", title: "Breaking the Cycle", seekerId: "david-m", category: "Overcoming",
      summary: "Choosing a different story for the next generation.",
      youtubeId: "", duration: "13:02" },
    { id: "s8", title: "Lost, Then Launched", seekerId: "angela-t", category: "Transformation",
      summary: "The long road from wandering to walking with purpose.",
      youtubeId: "", duration: "10:55" },
    { id: "s9", title: "What I'd Tell My Younger Self", seekerId: "angela-t", category: "What's Next",
      summary: "Hard-won wisdom for anyone standing at a crossroads.",
      youtubeId: "", duration: "8:47" },
    { id: "s10", title: "Two Men, Sobriety & a Divine Ride", seekerId: "jeremy-eubanks", category: "Overcoming",
      summary: "Freshly clean and sober, two men from the Oklahoma oil fields come to Fort Worth to race, and celebrate in Cowtown.",
      youtubeId: "", duration: "14:14" }
  ],

  episodes: [
    { id: "e1", number: 1, title: "Welcome to Seeker of Story", summary: "Why every story matters, and what this community is about.", youtubeId: "", duration: "24 min", date: "Coming soon" },
    { id: "e2", number: 2, title: "Lost Isn't the End", summary: "Real talk about the seasons when you don't know what's next.", youtubeId: "", duration: "31 min", date: "Coming soon" },
    { id: "e3", number: 3, title: "Faith at Work", summary: "Building a business, a career and a calling without leaving your faith at the door.", youtubeId: "", duration: "28 min", date: "Coming soon" },
    { id: "e4", number: 4, title: "Your Story Is Somebody's Survival Guide", summary: "Why sharing what you've been through can change someone else's life.", youtubeId: "", duration: "26 min", date: "Coming soon" }
  ],

  events: [
    { day: "TBD", month: "MONTHLY", title: "Story Night (Virtual)", detail: "Seekers share 5-minute stories live. Come listen or bring yours.", cta: "RSVP" },
    { day: "TBD", month: "WEEKLY", title: "Seeker Circles", detail: "Small groups for encouragement, prayer and accountability.", cta: "Join a circle" },
    { day: "TBD", month: "QUARTERLY", title: "Storytelling Workshop", detail: "Learn to tell your story on camera with confidence.", cta: "Get notified" }
  ],

  resources: [
    { title: "How to Tell Your Story in 5 Minutes", type: "Guide", category: "Storytelling", summary: "A simple framework: where you were, what happened, where you are now." },
    { title: "Story Recording Checklist", type: "Checklist", category: "Storytelling", summary: "Lighting, sound and setup tips for recording your story on a phone." },
    { title: "Next Chapter Planning Worksheet", type: "Worksheet", category: "What's Next", summary: "Map your next 90 days with clear, faith-filled goals." },
    { title: "Starting a Business with Purpose", type: "Guide", category: "Business", summary: "First steps for turning a calling into a business." },
    { title: "Devotional: When You Feel Lost", type: "Devotional", category: "Faith", summary: "Seven days of scripture and reflection for hard seasons." },
    { title: "Finding Help Near You", type: "Directory", category: "Overcoming", summary: "Hotlines, recovery programs and community support. (Links to be added.)" },
    { title: "Personal Brand Starter Kit", type: "Toolkit", category: "Business", summary: "Bio, headshot and social profile basics for founders." },
    { title: "Prayer Journal Prompts", type: "Printable", category: "Faith", summary: "30 prompts to process your story with God." }
  ]
};
