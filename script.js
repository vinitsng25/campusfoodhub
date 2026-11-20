const STALLS_DATA = [
    {
        id: 1,
        name: "PROTEIN HOUSE",
        subtitle: "Healthy Salads, Steamed Food, Vegan Soya Shakes & Krushers",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Salad Veg",
                note: null,
                items: [
                    { name: "Sprouts Salad", price: "₹80" },
                    { name: "Beans Salad", price: "₹100" },
                    { name: "Russian Salad", price: "₹120" },
                    { name: "Mexican Salad", price: "₹120" },
                    { name: "Paneer Tikka Salad", price: "₹140" },
                    { name: "Hearty Vegan Salad", price: "₹150" },
                    { name: "Protein Rich Salad", price: "₹160" }
                ]
            },
            {
                name: "Steam Food",
                note: null,
                items: [
                    { name: "Steam Sprouts", price: "₹40" },
                    { name: "Steam Corn", price: "₹80" },
                    { name: "Steam Sweet Potato", price: "₹90" },
                    { name: "Veg Steam Salad", price: "₹100" },
                    { name: "Steam Broccoli (Seasonal)", price: "MRP" }
                ]
            },
            {
                name: "Vegan Shakes Soya Milk",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Banana Shake", price: "₹40 / ₹50 / ₹60" },
                    { name: "Strawberry Shakes", price: "₹40 / ₹50 / ₹60" },
                    { name: "Pista Shakes", price: "₹60 / ₹70 / ₹80" },
                    { name: "Protein Shakes With Dry Fruit", price: "₹110" },
                    { name: "Oats Peanut Butter Banana", price: "₹70" },
                    { name: "Soya Milk 250 ml", price: "₹20" }
                ]
            },
            {
                name: "Krushers",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Fresh Lime Soda", price: "₹50 / ₹60 / ₹70" },
                    { name: "Virgin", price: "₹60 / ₹70 / ₹80" },
                    { name: "Green Apple", price: "₹60 / ₹70 / ₹80" },
                    { name: "Watermelon", price: "₹60 / ₹70 / ₹80" },
                    { name: "Fruit Punch", price: "₹60 / ₹70 / ₹80" },
                    { name: "Blue Curaçao", price: "₹60 / ₹70 / ₹80" },
                    { name: "Bubble Gum", price: "₹60 / ₹70 / ₹80" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "THE TANDOORI HUB",
        subtitle: "Rice, Soya Chaap, Amritsari Naan, Pao Bhaji & Kulcha",
        contact: "8725974505",
        stallId: "Vd0669",
        categories: [
            {
                name: "Rice",
                note: null,
                items: [
                    { name: "Rajma Rice", price: "₹60" },
                    { name: "Channa Rice", price: "₹60" },
                    { name: "Nutri Rice", price: "₹60" },
                    { name: "Chaap Rice", price: "₹60" },
                    { name: "Paneer Rice", price: "₹70" }
                ]
            },
            {
                name: "Soya Chaap",
                note: null,
                items: [
                    { name: "Malai Chaap With Plain Naan", price: "₹80" },
                    { name: "Irani Chaap With Plain Naan", price: "₹80" },
                    { name: "Affgani Chaap With Plain Naan", price: "₹80" },
                    { name: "Achari Chaap With Plain Naan", price: "₹80" },
                    { name: "Masala Chaap With Plain Naan", price: "₹80" },
                    { name: "Tandoori Chaap With Plain Naan", price: "₹80" },
                    { name: "Pudina Chaap With Plain Naan", price: "₹80" },
                    { name: "Malai Paneer Tikka With Plain Naan", price: "₹90" },
                    { name: "Tandoori Paneer Tikka With Plain Naan", price: "₹90" },
                    { name: "Mushroom Tikka With Plain Naan", price: "₹90" }
                ]
            },
            {
                name: "Amritsari Naan",
                note: null,
                items: [
                    { name: "Naan With Channa (2pc)", price: "Ask at Stall" },
                    { name: "Naan With Nutri (2pc)", price: "Ask at Stall" },
                    { name: "Naan With Chaap (2pc)", price: "₹70" },
                    { name: "Naan With Paneer (2pc)", price: "₹70" },
                    { name: "Aatta Naan With Chaap (2pc)", price: "₹60" },
                    { name: "Aatta Naan With Nutri (2pc)", price: "₹60" },
                    { name: "Aatta Naan With Chaap (2pc)", price: "₹70" },
                    { name: "Aatta Naan With Paneer (2pc)", price: "₹70" },
                    { name: "Tandoori Thali", price: "₹90" },
                    { name: "Gobi Naan With Channa (1pc)", price: "₹60" },
                    { name: "Gobi Naan With Paneer (1pc)", price: "₹70" },
                    { name: "Paneer Naan With Channa (1pc)", price: "₹60" },
                    { name: "Paneer Naan With Paneer (1pc)", price: "₹70" }
                ]
            },
            {
                name: "Pao Bhaji",
                note: null,
                items: [
                    { name: "Pao With Bhaji (3pc)", price: "₹60" },
                    { name: "Maska Pao Bhaji", price: "Ask at Stall" },
                    { name: "Chesse Pao Bhaji", price: "Ask at Stall" }
                ]
            },
            {
                name: "Bread Kulcha",
                note: null,
                items: [
                    { name: "Kulcha With Channa", price: "Ask at Stall" },
                    { name: "Kulcha With Nutri", price: "Ask at Stall" },
                    { name: "Kulcha With Chaap (2pc)", price: "₹60" },
                    { name: "Kulcha With Paneer", price: "Ask at Stall" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "JJS – Jiman Jeemo Sa",
        subtitle: "Rajasthani & Gujarati Food",
        contact: null,
        stallId: "VD CODE-0768",
        categories: [
            {
                name: "Rice Combo",
                note: null,
                items: [
                    { name: "Panchratani Dal Rice", price: "₹70" },
                    { name: "Rajma Rice", price: "₹70" },
                    { name: "Chana Rice", price: "₹70" },
                    { name: "Kadi Rice", price: "₹70" },
                    { name: "Paneer Rice", price: "₹70" }
                ]
            },
            {
                name: "Thali Combo",
                note: null,
                items: [
                    { name: "Simple Thali (Dal / Sabji / 2 Roti / Rice / Raita / Salad)", price: "₹80" },
                    { name: "Dal Batti Churma (Made with Desi Ghee)", price: "₹110" },
                    { name: "Rajsthani Thali (Gatte Ki Sabji / Panchratni Dal / Kadi / Rice / 3 Roti / Kheer / Raitsa / Salad)", price: "₹140" }
                ]
            },
            {
                name: "Sabji",
                note: "Half / Full",
                items: [
                    { name: "Gatte Ki Sabji", price: "₹40 / ₹70" },
                    { name: "Panchratni Dal", price: "₹40 / ₹70" },
                    { name: "Mirchi Kadi", price: "₹40 / ₹70" },
                    { name: "Rajma", price: "₹40 / ₹70" },
                    { name: "Chana", price: "₹40 / ₹70" },
                    { name: "Mix Veg", price: "₹40 / ₹70" },
                    { name: "Paneer Sabji", price: "₹50 / ₹90" },
                    { name: "Dry Sabji", price: "₹40 / ₹70" },
                    { name: "Gavar Fali / Kacha Papaya Methi / Ker Sangri / Kachi Keri Methi", price: "Seasonal" }
                ]
            },
            {
                name: "Bread",
                note: null,
                items: [
                    { name: "Batti (With Desi Ghee)", price: "₹30" },
                    { name: "Bajre Ki Roti", price: "₹30" },
                    { name: "Makki Ki Roti", price: "₹30" },
                    { name: "Missi Roti", price: "₹30" },
                    { name: "Methi Mix Roti", price: "₹30" },
                    { name: "Jawar Roti", price: "₹30" },
                    { name: "Tawa Butter Roti", price: "₹10" }
                ]
            },
            {
                name: "Pakoda",
                note: null,
                items: [
                    { name: "Jodhpuri Mirchi Pakoda", price: "₹35" },
                    { name: "Kofta", price: "₹25" },
                    { name: "Bahubali Samosa", price: "₹25" },
                    { name: "Paneer Pakoda", price: "₹40" }
                ]
            },
            {
                name: "Kachori",
                note: null,
                items: [
                    { name: "Onion Kachori", price: "₹35" },
                    { name: "Moth Dal Kachori", price: "₹35" }
                ]
            },
            {
                name: "Special Rajsthani Items",
                note: null,
                items: [
                    { name: "Indoori Poha", price: "₹50" },
                    { name: "Bajre Ki Raabri", price: "₹50" },
                    { name: "Dal Dhokli", price: "₹50 / ₹90" },
                    { name: "Masala Khichia", price: "₹40" },
                    { name: "Fafda (100gm)", price: "₹50" },
                    { name: "Dokla (2 Pcs)", price: "₹50" }
                ]
            },
            {
                name: "Special Combo",
                note: null,
                items: [
                    { name: "Fafda Jalebi (Combo)", price: "₹70" },
                    { name: "Poha Jalebi (Combo)", price: "₹70" }
                ]
            },
            {
                name: "Sweets",
                note: null,
                items: [
                    { name: "Rawla Keser Kheer", price: "₹50" },
                    { name: "Desi Ghee Jalebi", price: "₹50" },
                    { name: "Desi Ghee Churma", price: "₹40 / ₹70" }
                ]
            },
            {
                name: "Chai",
                note: null,
                items: [
                    { name: "Rajwadi Keser Tea", price: "₹20 / ₹40" },
                    { name: "Tandoori Tea", price: "₹20 / ₹40" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "GOVIND FRESH BITES",
        subtitle: "Only Indian Food",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Rice",
                note: null,
                items: [
                    { name: "Dal Rice", price: "₹70" },
                    { name: "Rajma Rice", price: "₹70" },
                    { name: "Chaana Rice", price: "₹70" },
                    { name: "Paneer Rice", price: "₹90" },
                    { name: "Kadhi Rice", price: "₹70" },
                    { name: "Rice Bowl", price: "₹80" }
                ]
            },
            {
                name: "Thali",
                note: null,
                items: [
                    { name: "Veg Thali", price: "₹80" },
                    { name: "Panner Thali", price: "₹90" },
                    { name: "Special Thali", price: "₹100" }
                ]
            },
            {
                name: "All Paratha",
                note: null,
                items: [
                    { name: "Paneer Paratha", price: "₹40" },
                    { name: "Mix Paratha", price: "₹30" },
                    { name: "Aloo Paratha", price: "₹30" },
                    { name: "Gobi Paratha", price: "₹30" },
                    { name: "Onion Paratha", price: "₹30" }
                ]
            },
            {
                name: "All Type Pakoda & Snacks",
                note: null,
                items: [
                    { name: "Mix", price: "₹50" },
                    { name: "Paneer", price: "₹20" },
                    { name: "Bread", price: "Ask at Stall" },
                    { name: "Chana Bhatura (2 Pc)", price: "₹60" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "SCF – CHAAP & KABAB",
        subtitle: "Rocking Rolls, Tawa Specials & Tandoori Snacks",
        contact: "89688-26245 / 75085-74735",
        stallId: null,
        categories: [
            {
                name: "Rocking Roll",
                note: null,
                items: [
                    { name: "Paneer Tikka Roll", price: "₹90" },
                    { name: "Affgani Roll", price: "₹90" },
                    { name: "Malai Chaap Roll", price: "₹90" },
                    { name: "Pudina Chaap Roll", price: "₹90" },
                    { name: "Chatpati Roll", price: "₹90" },
                    { name: "Stuffed Roll", price: "₹100" },
                    { name: "SCF Special Roll", price: "₹100" }
                ]
            },
            {
                name: "Tawa Special",
                note: null,
                items: [
                    { name: "Kulcha With Chaana", price: "₹60" },
                    { name: "Gobi Naan With Chaana", price: "₹80" },
                    { name: "Aloo Naan With Chaana", price: "₹80" },
                    { name: "Tawa Chaap", price: "₹100" },
                    { name: "Tawa Paneer", price: "₹100" },
                    { name: "Tawa Tikka Masala", price: "₹100" },
                    { name: "Tawa Mushroom", price: "₹100" },
                    { name: "Veg. Corma", price: "₹100" },
                    { name: "Keema Naan With Gravy", price: "₹110" },
                    { name: "Paneer Naan With Gravy", price: "₹110" }
                ]
            },
            {
                name: "Tandoori Snacks",
                note: null,
                items: [
                    { name: "Malai Chaap With Plain Naan", price: "₹95" },
                    { name: "Afgani Chaap With Plain Naan", price: "₹95" },
                    { name: "Chatpati Chaap With Plain Naan", price: "₹95" },
                    { name: "Tandoori Chaap With Plain Naan", price: "₹95" },
                    { name: "Achari Chaap With Plain Naan", price: "₹95" },
                    { name: "Pudina Chaap With Plain Naan", price: "₹95" },
                    { name: "Stuffed Tandoori Chaap", price: "₹110" },
                    { name: "Paneer Tikka", price: "₹95" },
                    { name: "Paneer Pudina Tikka", price: "₹95" }
                ]
            },
            {
                name: "Indian Bread & Drinks",
                note: null,
                items: [
                    { name: "Plain Butter Naan", price: "₹20" },
                    { name: "Rumali Roti", price: "₹12" },
                    { name: "Tandoori Roti", price: "₹12" },
                    { name: "Soft Drink", price: "MRP" }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "KIKEEZ JUICE BAR",
        subtitle: "New Kekeez Paratha • Fresh Juices, Shakes, Fruit Salads & Lassi",
        contact: "90410-93522",
        stallId: "LVD 0041",
        categories: [
            {
                name: "Cold Coffee",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Cold Coffee", price: "₹50 / ₹60 / ₹70" },
                    { name: "Cold Coffee (Double Ice Cream)", price: "₹60 / ₹70 / ₹80" }
                ]
            },
            {
                name: "Juice",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Orange Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Pineapple Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mix Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Watermelon Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Vegetable Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mosambi Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Apple Juice", price: "₹70 / ₹80 / ₹90" }
                ]
            },
            {
                name: "Fruit Shakes",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Mango Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Banana Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Papaya Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Guava Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Spota Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Musk Melon Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Strawberry Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Kiwi Shake", price: "₹80 (M) / ₹90 (L)" }
                ]
            },
            {
                name: "Shakes & Specials",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Butter Scotch Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Black Currant Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Chocolate Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Oreo Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Apple Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Pineapple Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Blueberry Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Ice Tea", price: "₹40 / ₹50 / ₹60" },
                    { name: "Kitkat Shake / Fuse Chocolate / Cake Shake", price: "Special" }
                ]
            },
            {
                name: "Fruit Salad",
                note: "450gm / 650gm",
                items: [
                    { name: "Mix Salad", price: "₹60 / ₹80" },
                    { name: "Papaya Salad", price: "₹60 / ₹80" },
                    { name: "Watermelon Salad", price: "₹60 / ₹80" },
                    { name: "Guava Salad", price: "₹60 / ₹80" },
                    { name: "Apple Salad", price: "₹70 / ₹90" }
                ]
            },
            {
                name: "Soda & Fresh Lassi",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Fresh Lime Soda", price: "₹30 / ₹40 / ₹50" },
                    { name: "Sweet Lassi", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mango Lassi", price: "₹50 / ₹60 / ₹70" },
                    { name: "Salted Lassi", price: "₹50 / ₹60 / ₹70" }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "OVEN XPRESS",
        subtitle: "Café & Bakery (Since 2008)",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Cafe Frappe",
                note: "Add-on Flavours: ₹20",
                items: [
                    { name: "Cold Coffee", price: "₹90" },
                    { name: "Cafe Nirvana", price: "₹90" },
                    { name: "Cafe Frappee", price: "₹90" },
                    { name: "Choco Chip Frappe", price: "₹100" },
                    { name: "White Choco Chips", price: "₹100" }
                ]
            },
            {
                name: "Sundaes",
                note: null,
                items: [
                    { name: "Hot Brownie", price: "₹60" },
                    { name: "Brownie Sundae", price: "₹150" },
                    { name: "Ice Creamy Foiter", price: "₹70" },
                    { name: "Fudge Sundae", price: "₹150" },
                    { name: "Classic Sundae", price: "₹150" },
                    { name: "Fruit Sundae", price: "₹150" }
                ]
            },
            {
                name: "Mocktails",
                note: null,
                items: [
                    { name: "Mint Mojito (Sweet)", price: "₹60 / ₹70" },
                    { name: "Virgin Mojito (Salted)", price: "₹60 / ₹70" },
                    { name: "Green Apple", price: "₹60 / ₹70" },
                    { name: "Blue Curacao", price: "₹60 / ₹70" },
                    { name: "Masala Lemonade", price: "₹70 / ₹80" },
                    { name: "Special Oven Xpress", price: "₹80 / ₹90" }
                ]
            },
            {
                name: "Krushers – Chocolates",
                note: null,
                items: [
                    { name: "Kit Kat", price: "₹90" },
                    { name: "Oreo", price: "₹90" },
                    { name: "Nutella", price: "₹150" },
                    { name: "Biscoff", price: "₹150" },
                    { name: "Ferrero Rocher", price: "₹150" },
                    { name: "Mars Bar", price: "₹150" },
                    { name: "Snickers", price: "₹150" },
                    { name: "Brownie", price: "₹120" }
                ]
            },
            {
                name: "Krushers – Flavours",
                note: null,
                items: [
                    { name: "Strawberry", price: "₹90" },
                    { name: "Blue Berry", price: "₹90" },
                    { name: "Bubblegum", price: "₹90" },
                    { name: "Mango", price: "₹90" },
                    { name: "Pineapple", price: "₹90" },
                    { name: "Butter Scotch", price: "₹90" },
                    { name: "Fruit Punch", price: "₹150" },
                    { name: "Black Currant", price: "₹90" },
                    { name: "Black Forest Krusher", price: "₹150" }
                ]
            },
            {
                name: "Hot Coffees",
                note: null,
                items: [
                    { name: "Espresso", price: "₹40" },
                    { name: "Cappuccino", price: "₹50" },
                    { name: "Latte", price: "₹60" },
                    { name: "Long Black", price: "₹80" },
                    { name: "Cafe Mocha", price: "₹70" },
                    { name: "Hot Chocolate", price: "₹80" },
                    { name: "Cookie Crumble", price: "₹80" },
                    { name: "Affogato (OX Spl)", price: "₹100" }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "CHINESE FOOD BY CAMPUS FUSION",
        subtitle: "Indo-Chinese Combos, Starters & Crispy Fries",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Chinese Combo",
                note: null,
                items: [
                    { name: "Noodles + Potato Fries", price: "₹80" },
                    { name: "Rice + Potato Fries", price: "₹80" },
                    { name: "Noodles + Honey Chilli Potato", price: "₹90" },
                    { name: "Rice + Honey Chilli Potato", price: "₹90" },
                    { name: "Noodles + Manchurian", price: "₹90" },
                    { name: "Rice + Manchurian", price: "₹90" },
                    { name: "Noodles + Gobhi Manchurian", price: "₹100" },
                    { name: "Rice + Gobhi Manchurian", price: "₹100" },
                    { name: "Rice + Honey Chilli Gobhi", price: "₹100" },
                    { name: "Noodles + Honey Chilli Gobhi", price: "₹100" },
                    { name: "Rice + Chilli Paneer", price: "₹120" }
                ]
            },
            {
                name: "Chinese",
                note: "Half / Full",
                items: [
                    { name: "Chilli Paneer", price: "₹100 (Full)" },
                    { name: "Honey Chilli Potato", price: "₹60 / ₹90" },
                    { name: "Chilli Mushroom", price: "₹100 (Full)" },
                    { name: "Honey Chilli Gobhi", price: "₹60 / ₹90" },
                    { name: "Manchurian", price: "₹60 / ₹90" },
                    { name: "Gobhi Manchurian", price: "₹60 / ₹90" }
                ]
            },
            {
                name: "Snacks & Fries",
                note: "Half / Full",
                items: [
                    { name: "Gobhi Pakoda", price: "₹50 / ₹70" },
                    { name: "Potato Salted Fries", price: "₹50 / ₹70" },
                    { name: "Potato Masala Fries", price: "₹50 / ₹70" },
                    { name: "Potato Peri-Peri Fries", price: "₹60 / ₹80" },
                    { name: "Potato Cheese Fries", price: "₹70 / ₹100" }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "SINGH JUICE BAR",
        subtitle: "Basant Spl. • Shakes, Thick Ice-Cream Shakes, Juices & Mojitos",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Shakes",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Banana Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Chocoloate Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Cold Coffee", price: "₹50 / ₹60 / ₹70" },
                    { name: "Oreo Milk Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Strawberry Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Papya Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Butter Scotch", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mango Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Apple Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Vanila Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Pineapple", price: "₹50 / ₹60 / ₹70" },
                    { name: "Kiwi Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Brhmi Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Black Current", price: "₹50 / ₹60 / ₹70" },
                    { name: "Lichi Shake", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mango Lassi", price: "₹50 / ₹60 / ₹70" }
                ]
            },
            {
                name: "Thick Ice-Cream Shakes",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Kitkat Shake", price: "₹60 / ₹70 / ₹80" },
                    { name: "Chocopie Shake", price: "₹60 / ₹70 / ₹80" },
                    { name: "Brown Shake", price: "₹60 / ₹70 / ₹80" },
                    { name: "Oreo Shake", price: "₹60 / ₹70 / ₹80" },
                    { name: "Basant Spl. Milk Badam", price: "Special" }
                ]
            },
            {
                name: "Juice",
                note: "Sizes: S / M / L",
                items: [
                    { name: "Mausami Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Carrot Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Orange Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Mix Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Muskmelon Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Pineapple Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Watermelon Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Apple Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Grape Juice", price: "₹50 / ₹60 / ₹70" },
                    { name: "Fresh Lime Soda", price: "₹30 / ₹40 / ₹50" },
                    { name: "Sugar Cane Juice", price: "₹30 / ₹40 / ₹50" },
                    { name: "Fresh Lime Water", price: "₹20 / ₹30 / ₹40" },
                    { name: "Pomegranate Juice", price: "₹100 / ₹120 / ₹150" }
                ]
            },
            {
                name: "Fresh Fruit Salad",
                note: null,
                items: [
                    { name: "400 Gm / 600 Gm", price: "₹60 / ₹80" }
                ]
            },
            {
                name: "Mojito",
                note: "Large",
                items: [
                    { name: "Mint Mojito", price: "₹60" },
                    { name: "Virgin Mojito", price: "₹60" },
                    { name: "Green Apple", price: "₹60" },
                    { name: "Blue Curacao", price: "₹60" },
                    { name: "Masala Lemonade", price: "₹60" },
                    { name: "Watermelon Mojito", price: "₹60" },
                    { name: "Lemon Iced Tea", price: "₹60" }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "CUPLATE",
        subtitle: "Sip & Smile • Maggi, Pasta, Burgers, Subs, Waffles & Beverages",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Maggi",
                note: null,
                items: [
                    { name: "Cheese Maggi", price: "₹70" },
                    { name: "Veggie Delight Maggi", price: "₹80" },
                    { name: "Spicy Masala Maggi", price: "₹80" },
                    { name: "Cheese Corn Maggi", price: "₹80" },
                    { name: "Cheesy Italian Maggi", price: "₹90" }
                ]
            },
            {
                name: "Pasta",
                note: null,
                items: [
                    { name: "White Sauce Pasta", price: "₹90" },
                    { name: "Red Sauce Pasta", price: "₹90" },
                    { name: "Mix Sauce Pasta", price: "₹95" },
                    { name: "Baked Pasta", price: "₹110" }
                ]
            },
            {
                name: "Wrap",
                note: null,
                items: [
                    { name: "Veggie Wrap", price: "₹60" },
                    { name: "Aloo Tikki Veggie Wrap", price: "₹70" },
                    { name: "Cheese Corn Wrap", price: "₹70" },
                    { name: "Paneer Tikka Wrap", price: "₹90" }
                ]
            },
            {
                name: "Veg Sub",
                note: null,
                items: [
                    { name: "Veggie Sub", price: "₹60" },
                    { name: "Aloo Tikki Sub", price: "₹60" },
                    { name: "Paneer Tikka Sub", price: "₹90" },
                    { name: "Cheese Corn Sub", price: "₹90" }
                ]
            },
            {
                name: "Grilled Sandwich",
                note: null,
                items: [
                    { name: "Coleslaw Sandwich", price: "₹70" },
                    { name: "Veggie Sandwich", price: "₹80" },
                    { name: "Aloo Tikki Sandwich", price: "₹80" },
                    { name: "Paneer Tikka Sandwich", price: "₹100" }
                ]
            },
            {
                name: "Burger",
                note: null,
                items: [
                    { name: "Aloo Tikki Burger", price: "₹40" },
                    { name: "Veg Loaded Burger", price: "₹50" },
                    { name: "Cheese Corn Burger", price: "₹70" },
                    { name: "Double Cheese Burger", price: "₹70" },
                    { name: "Paneer Tikka Burger", price: "₹80" }
                ]
            },
            {
                name: "Quick Bites & Fries",
                note: null,
                items: [
                    { name: "Simple Garlic Bread", price: "₹50" },
                    { name: "Sweet Corn", price: "₹50" },
                    { name: "Masala Special Corn", price: "₹60" },
                    { name: "Cheese Garlic Bread", price: "₹70" },
                    { name: "Classic Nachos", price: "₹70" },
                    { name: "Cheesy Nachos", price: "₹80" },
                    { name: "Loaded Garlic Bread", price: "₹85" },
                    { name: "French Fries", price: "₹70" },
                    { name: "Masala Fries", price: "₹80" },
                    { name: "Peri Peri Fries", price: "₹80" },
                    { name: "Cheesy Baked Fries", price: "₹100" }
                ]
            },
            {
                name: "Desserts & Waffle Sandwich",
                note: null,
                items: [
                    { name: "Brownie With Chocolate Sauce", price: "₹50" },
                    { name: "Lava Cake", price: "₹50" },
                    { name: "Choco Ice Cream Sundae", price: "₹50" },
                    { name: "Choco Brownie With Ice Cream", price: "₹60" },
                    { name: "Lava Cake With Ice Cream", price: "₹70" },
                    { name: "Double Brownie With Ice Cream", price: "₹110" },
                    { name: "Mint Chocolate Brownie + Ice Cream", price: "₹70" },
                    { name: "Maple Honey Waffle", price: "₹70" },
                    { name: "Belgian Chocolate Waffle", price: "₹90" },
                    { name: "Fruite Filling Waffle", price: "₹110" },
                    { name: "Tripple Chocolate Waffle", price: "₹110" },
                    { name: "Nutty Nutella Waffle", price: "₹120" },
                    { name: "Redvelvet Waffle", price: "₹120" },
                    { name: "Waffle Sundae", price: "₹120" },
                    { name: "Cuplate Special Waffle", price: "₹150" }
                ]
            },
            {
                name: "Chai & Hot Coffee",
                note: null,
                items: [
                    { name: "Dip Wali Chai", price: "₹20" },
                    { name: "Honey Green Tea", price: "₹20" },
                    { name: "Black Tea", price: "₹20" },
                    { name: "Espresso Shot", price: "₹40" },
                    { name: "Small Cappuccino", price: "₹50" },
                    { name: "Cafe Americano", price: "₹60" },
                    { name: "Cafe Latte", price: "₹70" },
                    { name: "Double Shot Espresso", price: "₹70" },
                    { name: "Cappuccino", price: "₹70" },
                    { name: "Cafe Mocha", price: "₹80" },
                    { name: "Hot Chocolate", price: "₹80" },
                    { name: "Flavoured Brews (Chocolate / Caramel / Irish / Hazelnut)", price: "₹90" }
                ]
            },
            {
                name: "Cold Coffee, Shakes, Smoothies & Iced Drinks",
                note: null,
                items: [
                    { name: "Flavoured Frappes (Chocolate / Caramel / Irish / Hazelnut)", price: "₹95" },
                    { name: "Oreo Smoothie", price: "₹80" },
                    { name: "Kitkat Smoothie", price: "₹90" },
                    { name: "Brownie Smoothie", price: "₹100" },
                    { name: "Blueberry Smoothie", price: "₹100" },
                    { name: "Shakes (Chocolate / Vanilla / Mango / Strawberry / Blueberry / Black Currant / Butterscotch / Kitkat / Oreo / Belgian Chocolate)", price: "₹50 / ₹60 / ₹70 / ₹130" },
                    { name: "Iced Drinks (Lemon Soda / Masala Soda / Lemon Ice Tea / Peach Ice Tea / Nimbu Pudina Paani / Cucumber Lime / Strawberry Lemonade / Apple Cider Detox)", price: "₹30 – ₹50" },
                    { name: "Slush (Strawberry / Blue Lagoon / Bloody Orange / Green Apple Slush)", price: "₹60" },
                    { name: "Moktails (Virgin Mojito / Watermelon Mojito / Green Apple Mojito / Black Currant Mojito / Blueberry Mojito)", price: "₹50 – ₹70" }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "THE BELGIAN WAFFLE EXPRESS",
        subtitle: "Belgian Waffle Sandwiches, Sundaes, Brownies, Shakes & Pancakes",
        contact: null,
        stallId: null,
        categories: [
            {
                name: "Belgian Waffles Sandwiches – Double Chocolate",
                note: null,
                items: [
                    { name: "Chocolate Overdose", price: "₹100" },
                    { name: "Dark & White Fairy", price: "₹100" },
                    { name: "Double Trouble", price: "₹110" },
                    { name: "Nuclear Nutella", price: "₹120" },
                    { name: "Biscoff Waffle", price: "₹120" },
                    { name: "Trio of Chocolate", price: "₹120" }
                ]
            },
            {
                name: "Belgian Waffles Sandwiches – Chocolate",
                note: null,
                items: [
                    { name: "Belgian Chocolate", price: "₹100" },
                    { name: "Kitkat Crunch", price: "₹110" },
                    { name: "Cream & Cookies", price: "₹110" },
                    { name: "Caramello", price: "₹110" },
                    { name: "Butterscotch", price: "₹100" },
                    { name: "Coffee Choco", price: "₹100" },
                    { name: "Tiramisu Waffle", price: "₹120" },
                    { name: "Kiki & Cream", price: "₹120" }
                ]
            },
            {
                name: "Fruits Filling",
                note: null,
                items: [
                    { name: "Strawberry Waffle", price: "₹120" },
                    { name: "Bue-Blueberry", price: "₹120" },
                    { name: "Mango Waffle", price: "₹120" }
                ]
            },
            {
                name: "Waffle Sundae",
                note: null,
                items: [
                    { name: "Fudge Ice-Cream", price: "₹120" },
                    { name: "Heavy Weight", price: "₹150" }
                ]
            },
            {
                name: "Brownies & Lava Cake",
                note: null,
                items: [
                    { name: "Hot Chocolate Brownie", price: "₹50" },
                    { name: "Brownie with Ice-Cream", price: "₹60" },
                    { name: "Nutella Brownie with Ice-Cream", price: "₹80" },
                    { name: "Biscoff Brownie with Ice-Cream", price: "₹80" },
                    { name: "Kiki & Cream Brownie with Ice-Cream", price: "₹80" },
                    { name: "Choco Lava Cake", price: "₹50" },
                    { name: "Choco Lava With Ice-Cream", price: "₹60" }
                ]
            },
            {
                name: "Shakes",
                note: null,
                items: [
                    { name: "Brownie Shake", price: "₹70" },
                    { name: "Cold Coffee", price: "₹70" },
                    { name: "Brownie Cold Coffee", price: "₹80" }
                ]
            },
            {
                name: "Pan Cakes",
                note: null,
                items: [
                    { name: "Belgian Chocolate", price: "₹100" },
                    { name: "Kitkat Chocolate", price: "₹100" },
                    { name: "Trio Chocolate", price: "₹110" }
                ]
            }
        ]
    }
];

// ===== State =====
let selectedStallId = "all";
let searchQuery = "";
const collapsedStalls = new Set();

// ===== DOM Elements =====
const stallPillsEl = document.getElementById("stallPills");
const stallsContainerEl = document.getElementById("stallsContainer");
const resultsCountEl = document.getElementById("resultsCount");
const emptyStateEl = document.getElementById("emptyState");
const searchInputEl = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const resetViewBtn = document.getElementById("resetViewBtn");
const expandAllBtn = document.getElementById("expandAllBtn");
const collapseAllBtn = document.getElementById("collapseAllBtn");

// ===== Helpers =====
function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[m]));
}

function highlightMatch(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return safe.replace(regex, '<mark class="highlight">$1</mark>');
}

// ===== Render Stall Filter Pills =====
function renderPills() {
    let html = `
        <button class="stall-pill ${selectedStallId === "all" ? "active" : ""}" data-id="all">
            All 11 Stalls
        </button>
    `;

    STALLS_DATA.forEach((stall) => {
        const isActive = String(selectedStallId) === String(stall.id);
        html += `
            <button class="stall-pill ${isActive ? "active" : ""}" data-id="${stall.id}">
                <span class="stall-pill-num">#${stall.id}</span>
                <span>${escapeHtml(stall.name)}</span>
            </button>
        `;
    });

    stallPillsEl.innerHTML = html;

    stallPillsEl.querySelectorAll(".stall-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
            selectedStallId = btn.dataset.id;
            renderPills();
            renderDirectory();
        });
    });
}

// ===== Render Main Directory =====
function renderDirectory() {
    const q = searchQuery.trim().toLowerCase();
    let visibleStallsCount = 0;
    let totalMatchingItems = 0;
    let cardsHtml = "";

    STALLS_DATA.forEach((stall) => {
        if (selectedStallId !== "all" && String(stall.id) !== String(selectedStallId)) {
            return;
        }

        const stallMatchesQuery =
            !q ||
            stall.name.toLowerCase().includes(q) ||
            (stall.subtitle && stall.subtitle.toLowerCase().includes(q)) ||
            (stall.stallId && stall.stallId.toLowerCase().includes(q));

        const filteredCategories = [];

        stall.categories.forEach((cat) => {
            const catMatches = q && cat.name.toLowerCase().includes(q);
            const matchingItems = cat.items.filter((item) => {
                if (!q || stallMatchesQuery || catMatches) return true;
                return (
                    item.name.toLowerCase().includes(q) ||
                    item.price.toLowerCase().includes(q)
                );
            });

            if (matchingItems.length > 0) {
                totalMatchingItems += matchingItems.length;
                filteredCategories.push({
                    ...cat,
                    items: matchingItems
                });
            }
        });

        if (filteredCategories.length === 0) {
            return;
        }

        visibleStallsCount++;
        const isCollapsed = !q && collapsedStalls.has(stall.id);

        const metaBadges = [];
        if (stall.stallId) {
            metaBadges.push(`<span class="meta-pill">Stall ID: ${escapeHtml(stall.stallId)}</span>`);
        }
        if (stall.contact) {
            const firstPhone = stall.contact.split("/")[0].replace(/[^0-9]/g, "");
            metaBadges.push(
                `<a href="tel:${firstPhone}" class="meta-pill phone" onclick="event.stopPropagation()">📞 ${escapeHtml(stall.contact)}</a>`
            );
        }

        const categoriesHtml = filteredCategories
            .map((cat) => {
                const itemsHtml = cat.items
                    .map((item) => {
                        const isUnpriced =
                            item.price === "Ask at Stall" ||
                            item.price === "Seasonal" ||
                            item.price === "Special" ||
                            item.price === "MRP";

                        return `
                            <li class="menu-item">
                                <span class="item-name">${highlightMatch(item.name, q)}</span>
                                <span class="item-price ${isUnpriced ? "unpriced" : ""}">${highlightMatch(item.price, q)}</span>
                            </li>
                        `;
                    })
                    .join("");

                return `
                    <div class="category-block">
                        <div class="category-title">
                            <span>${highlightMatch(cat.name, q)}</span>
                            ${cat.note ? `<span class="category-note">${escapeHtml(cat.note)}</span>` : ""}
                        </div>
                        <ul class="menu-list">
                            ${itemsHtml}
                        </ul>
                    </div>
                `;
            })
            .join("");

        cardsHtml += `
            <article class="stall-card ${isCollapsed ? "collapsed" : ""}" data-stall-id="${stall.id}">
                <div class="stall-header" role="button" tabindex="0" aria-expanded="${!isCollapsed}">
                    <div class="stall-title-group">
                        <div class="stall-badge">${stall.id}</div>
                        <div>
                            <h2 class="stall-name">${highlightMatch(stall.name, q)}</h2>
                            <p class="stall-tagline">${escapeHtml(stall.subtitle)}</p>
                            ${metaBadges.length > 0 ? `<div class="stall-meta">${metaBadges.join("")}</div>` : ""}
                        </div>
                    </div>
                    <button class="stall-toggle-btn" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                </div>
                <div class="stall-body">
                    ${categoriesHtml}
                </div>
            </article>
        `;
    });

    stallsContainerEl.innerHTML = cardsHtml;

    // Attach accordion toggle listeners
    stallsContainerEl.querySelectorAll(".stall-header").forEach((header) => {
        header.addEventListener("click", () => {
            const card = header.closest(".stall-card");
            const id = Number(card.dataset.stallId);
            const willCollapse = !card.classList.contains("collapsed");
            card.classList.toggle("collapsed", willCollapse);
            header.setAttribute("aria-expanded", String(!willCollapse));
            if (willCollapse) {
                collapsedStalls.add(id);
            } else {
                collapsedStalls.delete(id);
            }
        });
    });

    // Update status toolbar and empty state
    if (visibleStallsCount === 0) {
        emptyStateEl.hidden = false;
        resultsCountEl.textContent = "0 matching items found";
    } else {
        emptyStateEl.hidden = true;
        if (q) {
            resultsCountEl.textContent = `Found ${totalMatchingItems} item${totalMatchingItems === 1 ? "" : "s"} across ${visibleStallsCount} stall${visibleStallsCount === 1 ? "" : "s"}`;
        } else if (selectedStallId !== "all") {
            resultsCountEl.textContent = `Showing Stall #${selectedStallId} (${totalMatchingItems} items)`;
        } else {
            resultsCountEl.textContent = `Showing all ${visibleStallsCount} food stalls (${totalMatchingItems} menu items)`;
        }
    }
}

// ===== Event Listeners =====
searchInputEl.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.hidden = searchQuery.length === 0;
    renderDirectory();
});

clearSearchBtn.addEventListener("click", () => {
    searchQuery = "";
    searchInputEl.value = "";
    clearSearchBtn.hidden = true;
    searchInputEl.focus();
    renderDirectory();
});

resetSearchBtn.addEventListener("click", () => {
    searchQuery = "";
    selectedStallId = "all";
    searchInputEl.value = "";
    clearSearchBtn.hidden = true;
    renderPills();
    renderDirectory();
});

resetViewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchQuery = "";
    selectedStallId = "all";
    searchInputEl.value = "";
    clearSearchBtn.hidden = true;
    collapsedStalls.clear();
    renderPills();
    renderDirectory();
});

expandAllBtn.addEventListener("click", () => {
    collapsedStalls.clear();
    renderDirectory();
});

collapseAllBtn.addEventListener("click", () => {
    STALLS_DATA.forEach((s) => collapsedStalls.add(s.id));
    renderDirectory();
});

// ===== Initial Render =====
renderPills();
renderDirectory();
