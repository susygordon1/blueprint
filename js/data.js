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
    { id: "latoya-french", name: "Latoya French", city: "Texas", type: "Overcomer",
      from: "Homeless", to: "Homebound",
      headline: "Things depreciate in value. But you, who I created, there is no devaluing you.",
      bio: "Mother of five, life coach and author-in-progress. Latoya lost her home, her car and nearly everything she owned, and learned in that season that her worth was never tied to any of it. Today she is healed, housed, working, and building a coaching business and a book so others can find their way to the other side too.",
      evidenceCap: 1,
      sponsored: false,
      // Latoya's story, told through the four Seeker of Story pillars.
      // DRAFT: review with Latoya before promoting.
      story: {
        pillars: [
          { label: "Who she used to be", title: "A mom who had it together, until it all came apart",
            body: [
              "Latoya has been a mother since she was 17. She raised five children, lived in a two-story home before moving to Texas, then an apartment, and worked from home on contract. By every outside measure, she was doing well.",
              "In July 2022, trouble came to her son through someone he trusted, and threats were made against their home. With daughters to protect and no one to call in a new city, she left with no plan and no safety net. That decision led her into full homelessness: hotels, Airbnbs, a shelter, other people's couches, and her car. When the car was towed, everything she was using to survive went with it.",
              "Her children watched her crumble. Some, in their anger, told her she had failed. She carried shame and guilt, questioned God, and wondered if she was chosen or cursed."
            ] },
          { label: "What she's building", title: "A coaching practice, a book and a voice",
            body: [
              "Latoya is now a life coach, an author writing her first book, and the owner of her own business, while also working for a company that helped open the door to her new life.",
              "She started writing as she healed, and her pages became a body of work about surrender, obedience and restoration. As her boss told her, God is getting ready to release her mouth, so she can tell her story."
            ],
            points: ["Life coaching for people moving from survival to healing", "A book built from her writings, including \"Moments\"", "Her own business, built on the other side of her story"] },
          { label: "Why she's building it", title: "So no one has to stay in survival mode",
            body: [
              "\"Survival is not a state that you are meant to live in. It's something that you get through.\" Latoya learned that anything you survive, you have to heal from, and she wants to walk others through that healing.",
              "She also builds for her children. God showed her that she could not keep swimming back to pull each of them out without drowning in front of them. She had to reach shore first and leave a blueprint, so they could see what it took and learn to come out too."
            ] },
          { label: "How she's building it", title: "One day's provision at a time",
            body: [
              "Latoya never stopped trusting God, even when she questioned Him. He gave her enough for each day and nothing extra, often through strangers who blessed her in ways only God could arrange."
            ],
            points: [
              "Trusting God daily, even without seeing the other side",
              "Saying yes to a new job, where a supervisor connected her to her first home",
              "Moving in on New Year's Day, her birthday, living on her own for the first time since 17",
              "Taking time to heal: setting boundaries and rediscovering herself beyond being a mom",
              "Writing her way through it, which she calls very therapeutic",
              "Keeping her promise to share her story with everyone she can"
            ] }
        ],
        quote: { text: "Mom, I watch you with God, and I've watched you suffer. And if we don't see you come out, what hope do we have?", by: "Latoya's oldest son" },
        writing: {
          title: "Moments", credit: "Latoya French",
          intro: "Latoya wrote this as she began to heal, and read it aloud when she shared her story.",
          lines: [
            "I am so thankful for this moment,",
            "for this moment could not have come had I not survived those moments,",
            "those lingering moments of uncertainty and despair.",
            "Those moments when fear crept in from all the dangers that lurked around, threatening to ensnare me and render me helpless.",
            "Those moments when everything I was holding on to was no longer relevant.",
            "In those moments,",
            "those moments when homelessness captured me and comfort was denied.",
            "Those moments when the support that was given cost me more than what I could afford.",
            "In those moments,",
            "those moments when I was trying to keep my sanity in the midst of all the calamity,",
            "and those moments when my life was on display, I could not run or hide from all the ugly things people would say.",
            "In those moments,",
            "I didn't know if I was chosen or cursed, while not having much to offer the children I have birthed.",
            "In those moments, everyone and everything had a demand of me.",
            "But it was in those moments that I realized God had allowed those moments to set me free."
          ]
        },
        milestones: [
          { when: "Before", what: "Mother of five since 17, a two-story home, then an apartment in Texas" },
          { when: "July 2022", what: "Trouble comes to her son. She leaves home to keep her family safe" },
          { when: "The hard season", what: "Hotels, Airbnbs, her car, a shelter and couches. The car is towed with everything in it" },
          { when: "The turn", what: "A new job, and a supervisor who opens the door to a home" },
          { when: "January 1", what: "On her birthday, she moves into her own place" },
          { when: "Now", what: "Healed and healing, coaching, writing her book and building her business" }
        ],
        scripture: { ref: "Romans 8:28", text: "And we know that all things work together for good to them that love God." }
      } },
    { id: "carrie-carter", name: "Carrie Carter", city: "Fort Worth, TX", type: "Founder",
      from: "Travel Tech Executive", to: "Tour Company Founder",
      headline: "If a door doesn't open, there is a reason. There's something else you're supposed to find.",
      bio: "Born and raised in Fort Worth, Carrie spent 25 years in travel technology before being laid off twice in three years. Out of a season of reflection and prayer came Cowtown Tour Company, the minibus tour company Fort Worth was missing. Today she shows people from all over the world what her hometown is all about.",
      sponsored: false,
      business: { name: "Cowtown Tour Company", url: "https://cowtowntourco.com",
        tagline: "Guided minibus tours of Fort Worth, so visitors see more than Cowtown.",
        offers: ["Barbecue & Breweries", "Burgers & Breweries", "Margaritas & More", "Private tours for businesses and groups"],
        social: "@cowtowntourco on Instagram and Facebook. DMs are the best way to reach Carrie." },
      // DRAFT: review with Carrie before promoting.
      story: {
        pillars: [
          { label: "Who she used to be", title: "A 25-year travel tech career",
            body: [
              "Carrie spent 25 years in the travel technology space. She started at Travelscape, the platform Expedia bought to become what it is today, then went on to Expedia, Orbitz, 12 years in Las Vegas and 12 years at Sabre. Her work covered customer development, client relations, revenue management, marketing and digital media.",
              "Then she was laid off. It took a year to find another job, knocking on doors she thought would open and finding they wouldn't. She built and developed tools at her next job, trained everyone to use them, and essentially worked her way out of it. She was laid off twice in three years."
            ] },
          { label: "What she's building", title: "Cowtown Tour Company",
            body: [
              "Carrie launched Cowtown Tour Company and ran her first tours in September 2025. Guests board an 11-seat minibus with longhorns on the front and ride all over Fort Worth, seeing the places visitors never knew to look for.",
              "She also runs a second business, and she's at 1 Million Cups, Fort Worth's weekly gathering for entrepreneurs, every Wednesday morning."
            ],
            points: ["Public tours every day: Barbecue & Breweries, Burgers & Breweries, Margaritas & More", "Private tours with custom itineraries for businesses and groups", "Guests from across the country and around the world"] },
          { label: "Why she's building it", title: "Leading with a servant's heart",
            body: [
              "\"Life is too short to not have fun and to not benefit other people around you.\" For Carrie, the business is about making other people's lives better.",
              "\"I provide memories for people. I provide experiences that people will never forget.\" Strangers from three or four different parts of the world climb on the bus, laugh, take pictures and leave as friends. And she gets to show off the city she was born and raised in."
            ] },
          { label: "How she's building it", title: "Reflection, prayer and a gap nobody had filled",
            body: [
              "After the layoffs came a quiet season of reflection and prayer. Carrie noticed that Fort Worth had a gap: no tour company that took people all around town. She sat down with AI tools, typed in what she knew and what she believed, and molded the idea into a business. When she told her friends, they said it was perfect."
            ],
            points: [
              "Building on 25 years of customer and travel experience",
              "Growing through word of mouth and social media",
              "Showing up every week at 1 Million Cups",
              "Choosing resilience and looking for the silver lining, even on bad days"
            ] }
        ],
        quote: { text: "If a door doesn't open, there is a reason. It's because there's something else you're supposed to find. And I feel like now I'm on the path I'm supposed to be.", by: "Carrie Carter" },
        milestones: [
          { when: "Roots", what: "Born and raised in Fort Worth" },
          { when: "25 years", what: "Travel tech: Travelscape, Expedia, Orbitz, 12 years in Las Vegas, 12 years at Sabre" },
          { when: "The layoffs", what: "Laid off twice in three years. The first time, it took a year to find another job" },
          { when: "The quiet season", what: "Reflection and prayer, and she spots the gap: Fort Worth has no tour company that takes people all around town" },
          { when: "Sept 2025", what: "Cowtown Tour Company runs its first tours" },
          { when: "Now", what: "Tours every day, a second business, and 1 Million Cups every Wednesday" }
        ]
      } },
    { id: "lena-killion", name: "Lena Killion", city: "Fort Worth, TX", type: "Founder",
      spotlight: true, service: "Funeral Pre-Planning",
      from: "Aerospace Purchasing", to: "Pre-Need Founder",
      headline: "We're leaving a legacy to our children, not debt.",
      bio: "Theater major, construction pro, stay-at-home mom, first-place bodybuilder and aerospace buyer. When her grandmother passed and left her family a plan instead of a burden, Lena found her calling. Today she owns MLK Pre-Arrangements, helping families across Texas and beyond plan ahead, compare funeral homes and keep their power at the hardest moment of their lives.",
      sponsored: true,
      sponsor: { name: "MLK Pre-Arrangements", logo: "assets/mlk-logo.png", url: "https://mlkprearrangements.com", tagline: "Funeral pre-planning so your family can grieve in peace.", address: "1617 Park Place Ave., Suite 110-MLK, Fort Worth, TX 76110", email: "lena@mlkprearrangements.com", phone: "(682) 552-6501", self: true },
      // DRAFT: review with Lena before promoting.
      story: {
        pillars: [
          { label: "Who she used to be", title: "A big life, and a calm, profitable, boring job",
            body: [
              "Lena has lived a big life. A theater major, she did well in construction, where there weren't many women and even fewer Black women. She was in Glamour magazine at 28, danced ballroom, and spent 11 years as a stay-at-home mom raising her sons.",
              "While her boys were in school, she decided to see if she could win on a bodybuilding stage. Her first time out she took second place. A year later, she won first place in two categories.",
              "After her divorce, as a single mom, she worked in aerospace purchasing with major helicopter and defense suppliers. It was calm, profitable and boring. She wanted something meaningful, something of her own."
            ] },
          { label: "What she's building", title: "MLK Pre-Arrangements",
            body: [
              "Lena's company works like a shopping mall for pre-need funeral planning. Instead of being locked into one funeral home, families can compare dozens of locations and choose what fits their wishes and their budget. A pre-need plan locks in today's pricing, with no interest, no down payment and payments over 3, 5 or 10 years."
            ],
            points: [
              "Free planning conversations: cremation or burial, pricing and options",
              "Headstones and markers, including for unmarked graves, often for a fraction of the quoted price",
              "Medical and durable powers of attorney and HIPAA forms, notarized on the spot for free",
              "Licensed to help families in Texas and several other states",
              "Presentations for churches and businesses, plus a speed-networking event"
            ] },
          { label: "Why she's building it", title: "A plan instead of a burden",
            body: [
              "When Lena's grandmother passed, she left no burden. She had life insurance and a pre-need plan, so no one argued over the funeral home or the headstone. \"My grandma was a beautiful example of how we should all live our lives.\"",
              "Later, working at one of the largest funeral homes in DFW, Lena watched families get caught at their lowest moment, with no discounts and no payment plans. If they couldn't afford it, they had to leave, and she couldn't even tell them the place down the block was thousands cheaper. \"That hurt me more than anything.\" She wants no family to need a GoFundMe. \"This is not sales for me.\""
            ] },
          { label: "How she's building it", title: "Signs, grit and a tether to God",
            body: [
              "COVID changed how Lena saw things. Then a headhunter called out of nowhere about a funeral job. She said no: it was 100% commission, and she was a single mom. Two months later the same recruiter called back. \"My grandma must be giving me a sign.\" She took the job, immersed herself in the business, and when she'd seen enough, she walked out and built her own."
            ],
            points: [
              "Caring about people more than the check",
              "Bringing the same competitive drive that won her first place on stage",
              "Networking everywhere, from churches to businesses to radio",
              "Asking God for what she wants, then being still and waiting"
            ] }
        ],
        quote: { text: "My tether is to God. God is my foundation. When I feel like I'm running in circles, there's a tether, and I always bounce back.", by: "Lena Killion" },
        writing: {
          kicker: "Her word to anyone in transition", title: "Sit With Yourself", credit: "Lena Killion",
          intro: "Lena's advice for anyone laid off, burned out or figuring out what's next.",
          lines: [
            "Sit with yourself and ask: is there something I have a passion for?",
            "Is there something I can create in this life for myself, and make it for the betterment of other people?",
            "Don't give up. Get up and go do something.",
            "Network. Networking isn't just for business owners. It's for you as an individual trying to figure it out.",
            "Do not fear. Something good is out there. Just hold on, and get yourself in the right places."
          ]
        },
        milestones: [
          { when: "Growing up", what: "Raised in Bryan–College Station, in church, singing with a traveling gospel group" },
          { when: "Early career", what: "Theater major who made her mark in construction" },
          { when: "Mom years", what: "11 years as a stay-at-home mom, and first place on the bodybuilding stage" },
          { when: "Aerospace", what: "Purchasing for major helicopter and defense suppliers" },
          { when: "The sign", what: "Her grandmother passes with a plan in place. A headhunter calls twice, and Lena takes a funeral home job" },
          { when: "The walk-out", what: "Tired of families being turned away, she leaves and starts MLK Pre-Arrangements" },
          { when: "Now", what: "Helping families plan ahead across Texas and beyond, on radio, in churches and in businesses" }
        ]
      } },
    { id: "jeremy-eubanks", name: "Jeremy Eubanks", city: "Oklahoma", headline: "Two men, sobriety & a divine ride", bio: "Oil field worker who came to Fort Worth for a race right after getting clean and sober, and celebrated with a night of boot scootin' in Cowtown. (Full bio coming soon.)", sponsored: false },
    { id: "ashlan-david", name: "Ashlan David", city: "DeSoto, TX", type: "Overcomer",
      from: "Stage 2 Breast Cancer", to: "Cancer-Free",
      headline: "I don't have cancer, and cancer doesn't have me.",
      bio: "Wife, mom of two girls and breast cancer survivor. Diagnosed with stage 2 breast cancer in 2022 with no family history, Ashlan walked into chemo dressed up every week, declaring God's promises from Psalm 91. She has been cancer-free since May 25, 2023, and she keeps her promise to tell everyone she meets about the goodness of God.",
      sponsored: false,
      // DRAFT: review with Ashlan before promoting.
      story: {
        pillars: [
          { label: "Who she used to be", title: "Raised in church, but only calling on God in a crisis",
            body: [
              "Ashlan grew up in church and always had a relationship with God. But to be honest, she only went to Him in bad situations, not every day.",
              "She was a wife, a mom of two girls, and the cheer director for the youth football and cheer organization she and her husband run in DeSoto, Texas. When she felt a lump in the shower, she got nervous, told herself it would go away, and put it off until after the season, even while her best friend, a nurse, kept telling her to get it checked.",
              "On Halloween 2022, her doctor felt the lump during a routine exam. A mammogram and a biopsy followed. The day after Thanksgiving, the call came: stage 2 breast cancer, and it was growing fast."
            ] },
          { label: "What she's building", title: "A ministry of showing up",
            body: [
              "Ashlan is still in touch with many of the people she met during treatment, and they have asked her to come back and sit with patients. Too many people go through chemo alone, and she is setting aside time to be there for them.",
              "She also carries a message wherever she goes: early detection is the best detection."
            ],
            points: ["Sitting with patients so no one fights alone", "Encouraging women, and men, to do self-exams and go to the doctor", "Raising her daughters to read the Word for themselves and live with integrity", "Telling everyone she meets what God has done for her"] },
          { label: "Why she's building it", title: "A promise made on her knees",
            body: [
              "The moment she hung up from that diagnosis, Ashlan got on her knees and made God a promise: if He brought her through, she would tell every person she came in contact with about His goodness.",
              "When she sat her daughters down, their first question was whether she was going to die. She told them no, she was going to fight. In the chemo room, nobody looked like her, young or Black, so she showed up for whoever needed to see what faith looks like."
            ] },
          { label: "How she did it", title: "Bold faith and total surrender",
            body: [
              "\"God is the doctor, God is the surgeon, God is the medicine.\" Ashlan went to every appointment and trusted God with the outcome. For her, surrender means patience, telling God what she is thinking instead of telling Him her plan, and letting Him order her steps."
            ],
            points: [
              "Reading Psalm 91 every night",
              "Dressing up for chemo every Thursday, tutu and all",
              "Leaning on her husband, her family and her village",
              "Finishing 16 rounds of chemo and ringing the bell so hard it came off the wall",
              "Choosing a full mastectomy: \"My breasts don't define me\"",
              "Talking to God every morning and night like a friend"
            ] }
        ],
        quote: { text: "Mom, are you gonna die? No, baby. I'm not gonna die. I'm gonna fight.", by: "Ashlan and her daughters" },
        writing: {
          kicker: "The word she stands on", title: "Psalm 91", credit: "Psalm 91 (KJV)",
          intro: "Ashlan reads Psalm 91 every night. It carried her through every round of treatment.",
          lines: [
            "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
            "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
            "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.",
            "Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day.",
            "For he shall give his angels charge over thee, to keep thee in all thy ways."
          ]
        },
        milestones: [
          { when: "Before", what: "Wife, mom of two girls and youth cheer director. She feels a lump and puts off getting it checked" },
          { when: "Oct 31, 2022", what: "Her doctor finds the lump during a routine exam. Her first mammogram follows the same day" },
          { when: "Nov 2022", what: "A biopsy, then the call the day after Thanksgiving: stage 2 breast cancer" },
          { when: "Treatment", what: "16 rounds of chemo, dressed up every Thursday. She rings the bell so hard it breaks" },
          { when: "Surgery", what: "A full mastectomy, by her own choice" },
          { when: "May 25, 2023", what: "Cancer-free" },
          { when: "Now", what: "Keeping her promise and going back to sit with those still fighting" }
        ]
      } },
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

  categories: ["Founders", "Overcomers"],

  stories: [
    { id: "s1", title: "Moments: From Homeless to Surrender & Restoration", seekerId: "latoya-french", category: "Overcomers",
      summary: "A poetic testimony of surrender, obedience and restoration, from homeless to homebound.",
      youtubeId: "Lpi_z6UpEUc", duration: "", featured: true },
    { id: "s2", title: "Laid Off Twice, Then She Built Cowtown Tour Company", seekerId: "carrie-carter", category: "Founders",
      summary: "After 25 years in travel tech and two layoffs, Carrie found the gap in her hometown and filled it.",
      youtubeId: "Vi_55t1JOdA", duration: "", featured: true },
    { id: "s3", title: "From Aerospace to Peace of Mind", seekerId: "lena-killion", category: "Founders",
      summary: "Her grandmother left a plan instead of a burden. Now Lena helps families do the same, and keeps the funeral homes from catching them at their lowest.",
      youtubeId: "lypBfW6ai_M", duration: "", featured: true },
    { id: "s4", title: "Starting Over at 50", seekerId: "angela-t", category: "Overcomers",
      summary: "It's never too late to write the next chapter.",
      youtubeId: "", duration: "14:10" },
    { id: "s5", title: "Grace in the Waiting Room", seekerId: "maria-l", category: "Overcomers",
      summary: "Finding peace while the answers were still on the way.",
      youtubeId: "", duration: "11:48" },
    { id: "s6", title: "From Side Hustle to Calling", seekerId: "james-r", category: "Founders",
      summary: "Turning a weekend idea into work that matters.",
      youtubeId: "", duration: "16:30" },
    { id: "s7", title: "Breaking the Cycle", seekerId: "david-m", category: "Overcomers",
      summary: "Choosing a different story for the next generation.",
      youtubeId: "", duration: "13:02" },
    { id: "s8", title: "Lost, Then Launched", seekerId: "angela-t", category: "Overcomers",
      summary: "The long road from wandering to walking with purpose.",
      youtubeId: "", duration: "10:55" },
    { id: "s9", title: "What I'd Tell My Younger Self", seekerId: "angela-t", category: "Overcomers",
      summary: "Hard-won wisdom for anyone standing at a crossroads.",
      youtubeId: "", duration: "8:47" },
    { id: "s10", title: "Two Men, Sobriety & a Divine Ride", seekerId: "jeremy-eubanks", category: "Overcomers",
      summary: "Freshly clean and sober, two men from the Oklahoma oil fields come to Fort Worth to race, and celebrate in Cowtown.",
      youtubeId: "", duration: "14:14" },
    { id: "s11", title: "Cancer Doesn't Have Me: Ashlan's Story of Surrender & Bold Faith", seekerId: "ashlan-david", category: "Overcomers",
      summary: "Diagnosed with stage 2 breast cancer in 2022, Ashlan stood on Psalm 91 and walked boldly into her healing.",
      youtubeId: "JhAKrqzEwOM", duration: "" }
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
