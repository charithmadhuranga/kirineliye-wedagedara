// assets/js/lang.js

const translations = {
    // --- Common Navigation & Footer Translations ---
    title: { en: "Kirineliye Wedagedara", si: "කිරිනැළියේ වෙද ගෙදර" }, // For the main title
    nav_home: { en: "Home", si: "මුල් පිටුව" },
    nav_services: { en: "Services", si: "සේවාවන්" },
    nav_about: { en: "About", si: "අප ගැන" },
    nav_contact: { en: "Contact Us", si: "අපව අමතන්න" },
    footer: { en: "© 2025 Kirineliye Wedagedara. All rights reserved.", si: "© 2025 කිරිනැළියේ වෙද ගෙදර. සියලු හිමිකම් ඇවිරිණි." },

    // --- Index Page Specific Translations ---
    tagline: { en: "Health is the ultimate wealth", si: "ආරෝග්‍යා පරමා ලාභා" },
    intro_title: { en: "Welcome to the Pasyala Kirineliya Medical Center website.", si: "පස්යාල කිරිනැළියේ වෙද ගෙදර වෙබ් අඩවියට ඔබව සාදරයෙන් පිළිගනිමු" },
    intro_text: {
        en: "Dedicated to the control and cure of diseases through traditional and indigenous Ayurveda, it is a form of medicine practiced through the traditional knowledge and folk wisdom passed down through the generations of the Vedarala of the Kirineliya village, bestowed by King Dutugemunu in 149 BC. Since 1995, the traditional medicine of Kirineliya in Matara has been practicing traditional medicine, including boils, ulcers, burns, fractures, astrology, peacemaking, and the traditional medicine of the Devamulla Wijesekara Veda lineage of Bulathsinhala, and has practiced herbal medicine, medicine, convulsions, convulsions, and kaduttu, as well as peacemaking. Ariyaratne Vaduge, who has practiced a diploma in psychology from the University of Peradeniya, a certificate course in astrology from the University of Kelaniya, and a diploma in panchakarma from the Cochin University of Pune, India, and has cured or controlled the diseases of more than 30,000 patients, runs the Vedagedara Pasyala in Kirineliya.",
        si: "පාරම්පරික හා දේශීය ආයුර්වේදයෙන් රෝග පාලනය හා සුව කිරීම සදහා කැප වූ, ක්‍රිස්තු පූර්ව 149දී දුටුගැමුණු රජතුමා විසින් ප්‍රදානය කරන ලද කිරිනැළිය ගම්වරයේ වෙදරාලගේ පරම්පරාවෙන් පැවත එන පාරම්පරික දැනුම් සම්ප්‍රදායෙන් හා ජන විඥාණයෙන් ප්‍රගුණ වූ වෙදකමකි. 1995 සිට මාතර කිරිනැළියේ පාරම්පරික වෙදකමේ ගෙඩි, වණ, විදුම් පිළිස්සුම්, කැඩුම් බිඳුම්, ජ්‍යොතිෂ්‍ය, ශාන්ති කර්ම හා බුලත්සිංහල දේවමුල්ල විජේසේකර වෙද පරම්පරාවේ, පාරම්පරික සර්වාංග වෙදකමත්, සන්නි, කෝළ, වලිප්පු, ඉලප්පු, කඩුත්තු සදහා ඖෂධ ප්‍රතිකාර මෙන්ම ශාන්තිකර්මයන්ද ප්‍රගුණ කර ඇති අතර පේරාදෙණිය විශ්වවිද්‍යාලයෙන් මනෝ ව්ද්‍යා ඩිප්ලෝමාවද, කැළණිය විශ්වවිද්‍යාලයෙන් ජ්‍යොතිෂ්‍ය සහතික පත්‍ර පාඨමාලාවද, ඉන්දියාවේ පූනේ කොචින් විශ්වවිද්‍යාලයෙන් පංචකර්ම ඩිප්ලෝමාවද ප්‍රගුණ කර රෝගීන් 30 000 අධික ප්‍රමාණයකගේ රෝග සුව හෝ පාලනය කල ආරියරත්න වඩුගේ වෙදමහතා විසින් කිරිනැළියේ වෙදගෙදර පස්යාල, පවත්වාගෙන යනු ලබයි."
    },
    cta_title: { en: "Explore Our Treatments", si: "අපගේ ප්‍රතිකාර ක්‍රම සෙවීම" },
    cta_button: { en: "View Services", si: "සේවාවන් දැක්ම" },
    gallery_title: {en:"Our Memories",si:"අපගේ මතකයන්"},
    gallery_subtext:{en:"Our journey through the lens",si:"අපගේ ගමන කැමරාවකින් සටහන්වෙයි"},

    // --- Services Page Specific Translations ---
    services_page_title: { en: "Our Services", si: "අපගේ සේවාවන්" },
    services_page_title_meta: { en: "Services – Kirineliye Wedagedara", si: "සේවාවන් – කිරිනැළියේ වෙද ගෙදර" }, // For the <title> tag
    services_title: { en: "Our Treatments & Services", si: "අපගේ ප්‍රතිකාර සහ සේවාවන්" },
    service1_title: { en: "Panchakarma Detox", si: "පන්චකර්ම විෂ විමෝචනය" },
    service1_text: { en: "Comprehensive cleansing therapy to restore body balance and health.", si: "ශරීරයේ සමාන්‍යතාවය නැවත පරිප්‍රේෂණය කිරීම සඳහා සම්පූර්ණ විෂ නිරෝධායන ප්‍රතිකාර." },
    service2_title: { en: "Herbal Medicine", si: "ආයුර්වේද ඖෂධ" },
    service2_text: { en: "Customized Ayurvedic medicines prepared with ancient herbal formulas.", si: "පෞරාණික උද්භිද මූලධර්ම අනුව සකස් කළ පුද්ගලීකෘත ආයුර්වේද ඖෂධ." },
    service3_title: { en: "Bone & Joint Therapy", si: "අස්ථි හා සන්ධි ප්‍රතිකාර" },
    service3_text: { en: "Natural orthopedic treatments for injuries and chronic pain.", si: "චිරකාලීන වේදනා සහ තුවාල සඳහා ස්වභාවික අස්ථි වෛද්‍ය ප්‍රතිකාර." },
    service4_title: { en: "Spiritual Healing", si: "ආත්මීය සුවපත්කිරීම" },
    service4_text: { en: "Energy balancing, blessings, and rituals for mental well-being.", si: "මානසික සන්සුන්කම සඳහා ශක්ති සමතුලිත කිරීම, ආශීර්වාද සහ චාරිත්‍ර." },
    service5_title: { en: "Astrological Diagnosis", si: "ජ්‍යෝතිෂ්‍ය වෛද්‍ය විශ්ලේෂණය" },
    service5_text: { en: "Personalized treatment guided by traditional astrology readings.", si: "ජ්‍යෝතිෂ්‍ය විවරණ මඟින් මඟ පෙන්වන පුද්ගලික ප්‍රතිකාර." },
    service6_title: { en: "Mental Health Ayurveda", si: "මානසික සෞඛ්‍ය ආයුර්වේදය" },
    service6_text: { en: "Ayurvedic approaches to stress, anxiety, and emotional balance.", si: "මානසික ආතතිය, කනගාටු සහ සංවේදී සන්සුන්කම සඳහා ආයුර්වේද ක්‍රමවේද." },

    // --- About Page Specific Translations ---
    about_page_title: { en: "About Us", si: "අප ගැන" }, // This might be a duplicate, check if used
    about_page_title_meta: { en: "About – Kirineliye Wedagedara", si: "ගැන – කිරිනැළියේ වෙද ගෙදර" }, // For the <title> tag
    about_title: { en: "About Kirineliye Wedagedara", si: "කිරිනැළියේ වෙද ගෙදර පිළිබඳව" },
    about_intro_heading: { en: "Our Heritage and Philosophy", si: "අපගේ උරුමය සහ දර්ශනය" }, // This might be a duplicate, check if used
    about_intro_text: { en: "Kirineliye Wedagedara, rooted in a tradition bestowed by King Dutugemunu in 149 BCE, continues a rich legacy of indigenous Ayurvedic healing. Our philosophy centers on holistic well-being, combining ancient wisdom with modern understanding.", si: "ක්‍රි.පූ. 149 දී දුටුගැමුණු රජතුමා විසින් ප්‍රදානය කරන ලද සම්ප්‍රදායක මුල් බැසගත් කිරිනැළියේ වෙදගෙදර, දේශීය ආයුර්වේද සුව කිරීමේ පොහොසත් උරුමයක් දිගටම පවත්වාගෙන යයි. අපගේ දර්ශනය පුරාණ ප්‍රඥාව නවීන අවබෝධය සමඟ ඒකාබද්ධ කරමින් සාකල්‍ය යහපැවැත්ම මත කේන්ද්‍රගත වේ." }, // This might be a duplicate, check if used
    about_dr_heading: { en: "Dr. Ariyaratne Waduge", si: "වෛද්‍ය ආරියරත්න වඩුගේ" }, // This might be a duplicate, check if used
    about_dr_text: { en: "Led by Dr. Ariyaratne Waduge, an expert with diplomas in psychology, astrology, and Panchakarma, our center has successfully treated over 30,000 patients. His expertise spans traditional remedies for various ailments, including skin conditions, fractures, and mental health.", si: "මනෝවිද්‍යාව, ජ්‍යෝතිෂය සහ පංචකර්ම ඩිප්ලෝමාධාරී විශේෂඥ වෛද්‍ය ආරියරත්න වඩුගේ මහතාගේ නායකත්වයෙන් යුත් අපගේ මධ්‍යස්ථානය රෝගීන් 30,000 කට අධික සංඛ්‍යාවකට සාර්ථකව ප්‍රතිකාර කර ඇත. ඔහුගේ විශේෂඥ දැනුම සමේ රෝග, අස්ථි බිඳීම් සහ මානසික සෞඛ්‍ය ඇතුළු විවිධ රෝග සඳහා සාම්ප්‍රදායික ප්‍රතිකාර දක්වා විහිදේ." }, // This might be a duplicate, check if used
    history_title: { en: "A Legacy of Healing Since 149 BCE", si: "දුටුගැමුණු රජසමයේ සිට පාරම්පරිකව උරුම වූ වෙදශාස්ත්‍රය" },
    history_text: {
        en: "Kirineliye Wedagedara’s roots trace back to the time of King Dutugemunu, passed through generations of traditional healers. For over two millennia, it has remained a trusted name in Ayurvedic healing in Sri Lanka.",
        si: "දුටුගැමුණු රජතුමා අනුරාධපුර යුද්ධයෙන් පැරදී රුහුණට ආ පසු, රුහුණේ සිටි කාලය තුළ නෑබිලියට කිරි දී පිරිස පෝෂණය කළ නිසා ක්‍රි.පූ 149 දී දුටුගැමුණු රජතුමා රජ වූ පසු කෘතගුණ සැලකීමක් ලෙස කිරිනැළිය නමින් ගම්වරයක් වෙදරාළට ප්‍රදානය කරන ලදී. එතැන් සිට කිරිනැළියේ වෙදරාළගෙන් පැවත එන වෙද පරම්පරාව අපගේ කිරිනැළියේ වෙද පරම්පරාවයි."
    },
    history_text2: {
        en: "From bone setting to spiritual rituals, this heritage encompasses both medical and mystical approaches to holistic health. The medical clinic in Kirineliya, Pasyala, established by Ariyaratne Waduge, who has mastered the knowledge received through tradition, has treated over 30,000 patients since 1995.",
        si: "එදා සිට පැවත එන කිරිනැළියට සුවිශේෂ වෙදකම වන ගෙඩි වන පිළිකා හා විදුම් පිළිස්සුම් ප්‍රතිකාර, පාරම්පරික වෙද ශාස්ත්‍රය, ඖෂධ වට්ටෝරු, ජ්‍යෝතිෂය, භූත විද්‍යාව, යන්ත්‍ර මන්ත්‍ර, ශාන්ති කර්ම පිළිබද විශිෂ්ට දැනුම් සම්ප්‍රදායෙන් හා ජන විඥාණයෙන් ප්‍රගුණව පවත්වාගෙන යනු ලබයි. එලෙස පාරම්පරිකව ලැබුණු දැණුමෙන් ප්‍රගුණව ආරියරත්න වඩුගේ වෙදමහතා විසින් ස්ථාපිත කළ පස්යාල කිරිනැළියේ වෙදගෙදර ක්‍රි.ව 1995 සිට අද දක්වා රෝගීන් 30000 අධික ප්‍රමාණයකට ප්‍රතිකාර කර ඇත"
    },
    doctor_title: { en: "Dr. Ariyaratne Waduge", si: "වෛද්‍ය ආරියරත්න වඩුගේ" },
    doctor_text: {
        en: "An expert Ayurvedic doctor with diplomas in Panchakarma (India), psychiatry (Peradeniya), and astrology (Kelaniya). He has treated over 30,000 patients combining medical science and ancestral wisdom.",
        si: "ආයුර්වේදයේ විශේෂඥයකු වන ආරියරත්න වඩුගේ මහතා පන්චකර්ම (ඉන්දියාව), මානසික වෛද්‍ය (පේරදෙණිය) සහ ජ්‍යෝතිෂ්‍යවේදය (කැළණිය) පිළිබඳ ඩිප්ලෝමා ලබා ඇති අතර, 30,000කට අධික රෝගීන්ට ප්‍රතිකාර කර ඇත."
    },

    // --- Contact Page Specific Translations ---
    contact_page_title: { en: "Contact Us", si: "අපව අමතන්න" }, // This might be a duplicate, check if used
    contact_page_title_meta: { en: "Contact – Kirineliye Wedagedara", si: "සම්බන්ධතා – කිරිනැළියේ වෙද ගෙදර" }, // For the <title> tag
    contact_title: {
        en: "Contact Kirineliye Wedagedara",
        si: "කිරිනැළියේ වෙද ගෙදර අමතන්න"
    },
    contact_sub: {
        en: "We'd love to hear from you. Please reach out via the form or our contact details below.",
        si: "අප හා සම්බන්ධ වීමට අපි කැමතියි. කරුණාකර පෝරමය හරහා හෝ අපගේ විස්තර මඟින් සම්බන්ධ වන්න."
    },
    address_title: {
        en: "Address",
        si: "ලිපිනය"
    },
    address_text: {
        en: `Kirineliya Veda Gedara,
Kandy Road,
Pasyala,
(Road between Pasyala Maha Vidyalaya and Primary School)`,
        si: `කිරිනැළියේ වෙද ගෙදර,
මහනුවර පාර,
පස්යාල,
(පස්යාල මහ විද්‍යාලය සහ ප්‍රාථමික පාසල අතර පාර)`
    },
    phone_title: {
        en: "Phone & WhatsApp",
        si: "දුරකථන සහ WhatsApp"
    },
    location_title: {
        en: "Our Location",
        si: "අපගේ ස්ථානය"
    },
    clinic_hours_title: {
        en: "Clinic Hours",
        si: "චිකිත්සාලයේ සේවා වේලාවන්"
    },
    clinic_hours: {
        en: [
            ["Monday", "Closed"],
            ["Tuesday", "8 AM – 8 PM"],
            ["Wednesday", "Closed"],
            ["Thursday", "8 AM – 8 PM"],
            ["Friday", "8 AM – 8 PM"],
            ["Saturday", "Closed"],
            ["Sunday", "8 AM – 8 PM"]
        ],
        si: [
            ["සඳුදා", "වසන්"],
            ["අඟහරුවාදා", "පෙ.ව. 8 – ප.ව. 8"],
            ["බදාදා", "වසන්"],
            ["බ්‍රහස්පතින්දා", "පෙ.ව. 8 – ප.ව. 8"],
            ["සිකුරාදා", "පෙ.ව. 8 – ප.ව. 8"],
            ["සෙනසුරාදා", "වසන්"],
            ["ඉරිදා", "පෙ.ව. 8 – ප.ව. 8"]
        ],
    },
    clinic_note: {
        en: "(Book an appointment before visiting.)",
        si: "(ඇතුල් වීමට පෙර වේලාවක් වෙන්කරන්න.)"
    },
    form_email: {
        en: "Email:",
        si: "ඊමේල්:"
    },
    form_message: {
        en: "Message:",
        si: "පණිවිඩය:"
    },
    form_submit: {
        en: "Submit",
        si: "යවන්න"
    },
    fracture_title: { en: "Fracture Treatment", si: "කැඩුම් බිඳුම් ප්‍රතිකාර" },
    fracture_text: { en: "Healing injuries such as sprains, strains, bruises, cuts, shoulder, elbow, knee, and wrist bandages.", si: "උලුක්කු, ඇමැට්ටි, තැලීම්, කෙටීම්, උරහිස, වැළමිට, දණහිස, අත් පා ඇගිලි වෙළුම්පටි සඳහා වෙළුම්පටි වැනි තුවාල සුව කිරීම." },

    joint_title: { en: "Joint & Nerve Related Diseases", si: "සන්ධි හා ස්නායු ආශ්‍රිත රෝග" },
    joint_text: { en: "Control or cure diseases such as back, knee, shoulder pain, joint swelling, arthritis, paralysis, limb numbness and pain.", si: "කොන්ද, දණහිස්, උරහිස් වේදනාවන්, සන්ධි ඉදිමීම, ආතරයිටිස්, අංශභාගය, අත් පා හිරිය හා වේදනාව වැනි රෝග පාලනය කිරීම හෝ සුව කිරීම." },

    mental_title: { en: "Mental Illness", si: "මානසික රෝග" },
    mental_text: { en: "Psychological counseling and treatments for depression, anxiety, stress, and emotional trauma.", si: "මනෝවෛද්‍ය උපදේශනය සහ ආතතිය, කනගාටුව, මානසික පීඩනය, මානසික ස්ත්‍රීත්වය සඳහා ප්‍රතිකාර." },

    headache_title: { en: "Headaches", si: "ශීර්ෂ රෝග" },
    headache_text: { en: "Control or cure all venereal diseases and migraines.", si: "සියලුම පීනස් රෝග හා ඉරුවාරදය පාලනය කිරීම හෝ සුව කිරීම." },

    skin_title: { en: "Skin Diseases", si: "සමේ රෝග" },
    skin_text: { en: "Control or cure skin diseases such as eczema, rashes, scabies, and lichen.", si: "දද, කුෂ්ඨ, පොතුකබර, සුදු කබර ආදී චර්ම රෝග පාලනය කිරීම හෝ සුව කිරීම." },

    women_title: { en: "All Women's Diseases", si: "සියළුම කාන්තා රෝග" },
    women_text: { en: "Treatment for delayed fertility, infertility, leprosy, varicose veins, constipation, mental stress, and hidden diseases.", si: "දරුඵල ප්‍රමාදවීම, සුදයාම, ලේමලය, නහර ගැටගැසීම, කෘෂ්වීම, මානසික පීඩනය, රහස් රෝග, කළුකුමාර දෝෂ සඳහා ප්‍රතිකාර." },

    obesity_title: { en: "Obesity Treatment", si: "ස්ථුල භාවය" },
    obesity_text: { en: "Special treatments to reduce thigh and abdominal protrusion and excessive obesity.", si: "කලවා හා උදරය ඉදිරියට නෙරා ඒම, අධික තරබාරුව අඩුකර ගැනීමට විශේෂ ප්‍රතිකාර." },

    std_title: { en: "Sexually Transmitted Diseases", si: "ලිංගික රෝග" },
    std_text: { en: "Treatment for premature ejaculation, erectile dysfunction, low libido, and mental distress.", si: "ක්ෂණික මෝචනය, අප්‍රාණිකත්වය, කුඩා වීම, ප්‍රියභාවය අඩුකම, මානසික අසීරුතාව සඳහා ප්‍රතිකාර." },

    beauty_title: { en: "Female / Male Beauty", si: "ස්ත්‍රී / පුරුෂ රූපලාවන්‍යය" },
    beauty_text: { en: "Treatment for acne scars, all types of scars, oil massage, Ayurvedic facial, body scrub.", si: "කුරුළෑ, ළපකැළැල්, තෛල අභ්‍යාංග, අයුර්වේද ෆේශල්, බොඩි ස්ක්රබ් සඳහා ප්‍රතිකාර." },

    astro_title: { en: "Astrological Service", si: "ජ්‍යෝතිෂ්‍ය සේවාවන්" },
    astro_text: { en: "All astrological services like horoscope readings, marriage matching, auspicious timings, amulets.", si: "කේන්ද්‍ර බැලීම, පලාඵල කථනය, විවාහ පොරොන්දම් පරික්ෂණය, විවාහ සිදු සදහා සුභ මුහුර්ත් සැකසීම, විවාහ නැකැත්, ආදිය." },

    shanti_title: { en: "Peaceful Deeds / Shanti Karma", si: "ශාන්ති කර්ම" },
    shanti_text: { en: "Performing Shanti Karma for planetary afflictions, black magic, spirits, protection rituals.", si: "ග්‍රහ පූජා, තනිකම් දෝෂ, කළුකුමාර දෝෂ, යක්ෂ/ප්‍රේත දෝෂ සදහා ශාන්ති කර්ම, දෙහි කැපීම, බහිරව පූජා, ආරක්ෂක යන්ත්‍ර මන්ත්‍ර." },

    // --- New Section: Specialty of the Medical Clinic ---
    specialty_title: { en: "The Unique Specialty of Pasyala Kirineliya Medical Clinic", si: "පස්යාල කිරිනැළියේ වෙදගෙදර විශේෂත්වය" },
    specialty_intro: {
        en: "At the heart of our practice lies the rich heritage and profound knowledge passed down through generations of the Kirineliya Veda lineage.",
        si: "අපගේ ප්‍රතිකාර ක්‍රමවල හදවත වන්නේ කිරිනැළියේ වෙද පරම්පරාවෙන් පරම්පරාවට පැවත එන පොහොසත් උරුමය සහ ගැඹුරු දැනුමයි."
    },
    specialty_oils_heading: { en: "Exclusive Traditional Oils:", si: "අවේණික සාම්ප්‍රදායික තෙල් වර්ග:" },
    specialty_oils_text: {
        en: `Our clinic boasts a unique collection of powerful medicinal oils, meticulously prepared according to the specific scientific principles and ancient rituals inherent to the Kirineliya lineage. These include:
        Kirineliya Kadumbidum Oil, Kirineliya Gasu Oil, Kirineliya Sandi Oil, Kirineliya Kalu Kumara Oil, Maha Divyanganadi Oil, Maha Sanni Raja Oil, Kuddus Oil, Maha Vishnu Raja Oil, Maha Buddha Raja Oil, Maha Devara Raja Oil, Maha Irudepanaya Oil, Maha Rajatarangani Oil.
        Among our most treasured remedies is a special oil that is about 100 years old, a testament to our enduring legacy and profound traditional wisdom.`,
        si: `අපගේ වෙදගෙදරට කිරිනැළියේ වෙද පරම්පරාවට අවේනික වූ ශාස්ත්‍රානුකූලව හා චාරිත්‍ර විධි අනුව සකස් කරන ලද මහා බලගතු තෙල් බෙහෙත් වර්ග රාශියක් ඇත. ඒවා නම්:
        කිරිනැළියේ කැඩුම් බිඳුම් තෙල, කිරිනැළියේ ගස් තෙල, කිරිනැළියේ සන්දි තෙල, කිරිනැළියේ කළු කුමාර තෙල, මහා දිව්‍යාංගනාදි තෙල, මහා සන්නි රාජ තෙල, කුද්දුස් තෙල, මහා විෂ්ණුරාජ තෙල, මහා බුද්ධරාජ තෙල, මහා දේවරාජ තෙල, මහා ඉරුදැපනය තෙල, මහා රාජතරංගණී තෙල.
        අවුරුදු 100 ක් පමණ පැරණි තෙල් වර්ගද අප සතුව ඇත, එය අපගේ නොනැසී පවතින උරුමයට හා ගැඹුරු සාම්ප්‍රදායික ප්‍රඥාවට සාක්ෂියකි.`
    },
    specialty_patient_care_heading: { en: "Personalized Patient Care:", si: "රෝගියා වෙනුවෙන්ම සාදන විශේෂිත ඖෂධ:" },
    specialty_patient_care_text: {
        en: "We believe in a holistic and individualized approach. From the initial diagnosis to the treatment plan and the preparation of your specific medication, every step is handled personally by our resident doctor. This ensures continuity of care and medicines specifically formulated for your unique needs.",
        si: "අපි පරිපූර්ණ සහ පුද්ගලාරෝපිත ප්‍රවේශයක් විශ්වාස කරමු. රෝග නිර්ණයයේ සිට ප්‍රතිකාර සැලැස්ම සහ ඔබේ නිශ්චිත ඖෂධ සකස් කිරීම දක්වා සෑම පියවරක්ම අපගේ වෙදමහතා විසින් පුද්ගලිකව හසුරුවනු ලැබේ. මෙය අඛණ්ඩ ප්‍රතිකාර සහ ඔබේ සුවිශේෂී අවශ්‍යතා සඳහා විශේෂයෙන් සකස් කරන ලද ඖෂධ සහතික කරයි."
    },
    specialty_ancient_wisdom_heading: { en: "Ancient Wisdom for Modern Ailments:", si: "සාම්ප්‍රදායික දැනුම හා අවබෝධය:" },
    specialty_ancient_wisdom_text: {
        en: "Our practice extends beyond physical remedies. We possess exceptional knowledge and understanding of traditional astrology, demonology, Yantra mantras, and Shanti rituals. This comprehensive understanding allows us to address the root causes of illnesses, integrating spiritual and energetic healing with physical treatments.",
        si: "අපගේ ප්‍රගුණ කිරීම භෞතික පිළියම් ඉක්මවා යයි. අපට සාම්ප්‍රදායික ජ්‍යෝතිෂය, භූත විද්‍යාව, යන්ත්‍ර මන්ත්‍ර සහ ශාන්ති කර්ම පිළිබඳ විශිෂ්ට දැනුමක් හා අවබෝධයක් ඇත. මෙම විස්තීර්ණ අවබෝධය රෝගවල මූල හේතු ආමන්ත්‍රණය කිරීමට, අධ්‍යාත්මික හා ශක්තිජනක සුව කිරීම් භෞතික ප්‍රතිකාර සමඟ ඒකාබද්ධ කිරීමට අපට ඉඩ සලසයි."
    },
    specialty_medicine_prep_heading: { en: "Authentic & Ritualistic Medicine Preparation:", si: "ඖෂධ සකස්කිරීම:" },
    specialty_medicine_prep_text: {
        en: "All our medicines are prepared with utmost dedication and adherence to traditional methods and proper rituals. We use traditional medicinal recipes without any alterations, ensuring the efficacy and purity of our ancient remedies. Furthermore, medicines are prepared with the blessings and chanting of Pirith by venerable Buddhist monks, infusing them with spiritual potency.",
        si: "අපගේ සියලුම ඖෂධ සාම්ප්‍රදායික ක්‍රමවේදයන්ට සහ නිසි වත් පිළිවෙත්වලට අනුකූලව ඉතා කැපවීමෙන් සකස් කරනු ලැබේ. අපගේ පුරාණ ඖෂධවල කාර්යක්ෂමතාවය සහ පාරිශුද්ධත්වය සහතික කරමින්, කිසිදු වෙනසක් නොමැතිව සාම්ප්‍රදායික ඖෂධ වට්ටෝරු භාවිතා කරන්නෙමු. තවද, පූජ්‍ය භික්ෂූන් වහන්සේලා විසින් පිරිත් සජ්ඣායනා කරමින් ඖෂධ සකස් කරනු ලැබේ, එමගින් ඒවාට අධ්‍යාත්මික ශක්තියක් ලබා දේ."
    },
    specialty_diagnosis_heading: { en: "Precise Diagnostic Methods:", si: "රෝග පරීක්ෂණය:" },
    specialty_diagnosis_text: {
        en: "Our diagnostic process is thorough and traditional, incorporating current astrological charts (Thathkala Kendraya), visual examination (Dasaruwa), and the analysis of omens (Dutha Lakshana) to accurately identify your condition.",
        si: "අපගේ රෝග විනිශ්චය ක්‍රියාවලිය සවිස්තරාත්මක හා සාම්ප්‍රදායික වන අතර, ඔබේ තත්වය නිවැරදිව හඳුනා ගැනීම සඳහා තත්කාල කේන්ද්‍රයට අනුව, දසරුවෙන් සහ දුත ලක්ෂණ අනුව රෝග පරීක්ෂණය ඇතුළත් වේ."
    },
};

function renderClinicHours(lang) {
    const tbody = document.querySelector('#clinic-hours-table tbody');
    if (!tbody) return; // Exit if table body not found

    tbody.innerHTML = '';
    const hours = translations.clinic_hours[lang] || translations.clinic_hours.en;
    hours.forEach(([day, time]) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td class="py-1 pr-4 font-medium">${day}</td><td class="py-1">${time}</td>`;
        tbody.appendChild(row);
    });

    const noteEl = document.getElementById("clinic-note");
    if (noteEl) {
        noteEl.textContent = translations.clinic_note[lang] || translations.clinic_note.en;
    }
}

function setLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('preferredLanguage', lang);

    document.querySelectorAll('.lang').forEach(element => {
        const key = element.dataset.key;
        if (translations[key] && translations[key][lang]) {
            // Special handling for pre-formatted text like address_text and specialty_oils_text etc.
            if (['address_text', 'specialty_oils_text', 'specialty_patient_care_text', 'specialty_ancient_wisdom_text', 'specialty_medicine_prep_text', 'specialty_diagnosis_text'].includes(key)) {
                element.innerHTML = translations[key][lang].replace(/\n/g, '<br>');
            } else if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                // Handle placeholders for input/textarea if needed (not in current structure but good to note)
                // For labels, textContent is fine.
                element.textContent = translations[key][lang];
            }
            else {
                element.textContent = translations[key][lang];
            }
        }
    });

    // Update active state of language buttons
    updateLanguageButtons(lang);

    // Re-render clinic hours as it's a dynamic table
    renderClinicHours(lang);

    // Update the <title> tag separately as it's not always a .lang element
    const titleElement = document.querySelector('title.lang');
    if (titleElement && translations[titleElement.dataset.key] && translations[titleElement.dataset.key][lang]) {
        document.title = translations[titleElement.dataset.key][lang];
    }
}

function getPreferredLanguage() {
    // Retrieve the preferred language from localStorage, default to 'en'
    return localStorage.getItem('preferredLanguage') || 'en';
}

function updateLanguageButtons(currentLang) {
    // Desktop buttons
    const desktopEn = document.getElementById('lang-en');
    const desktopSi = document.getElementById('lang-si');
    if (desktopEn) {
        desktopEn.classList.toggle('bg-green-700', currentLang === 'en');
        desktopEn.classList.toggle('text-white', currentLang === 'en');
        desktopEn.classList.toggle('border-green-700', currentLang === 'en');
        desktopEn.classList.toggle('border-gray-400', currentLang !== 'en');
        desktopEn.classList.toggle('text-gray-700', currentLang !== 'en');
    }
    if (desktopSi) {
        desktopSi.classList.toggle('bg-green-700', currentLang === 'si');
        desktopSi.classList.toggle('text-white', currentLang === 'si');
        desktopSi.classList.toggle('border-green-700', currentLang === 'si');
        desktopSi.classList.toggle('border-gray-400', currentLang !== 'si');
        desktopSi.classList.toggle('text-gray-700', currentLang !== 'si');
    }

    // Mobile buttons
    const mobileEn = document.getElementById('lang-en-mobile');
    const mobileSi = document.getElementById('lang-si-mobile');
    if (mobileEn) {
        mobileEn.classList.toggle('bg-green-700', currentLang === 'en');
        mobileEn.classList.toggle('text-white', currentLang === 'en');
        mobileEn.classList.toggle('border-green-700', currentLang === 'en');
        mobileEn.classList.toggle('border-gray-400', currentLang !== 'en');
        mobileEn.classList.toggle('text-gray-700', currentLang !== 'en');
    }
    if (mobileSi) {
        mobileSi.classList.toggle('bg-green-700', currentLang === 'si');
        mobileSi.classList.toggle('text-white', currentLang === 'si');
        mobileSi.classList.toggle('border-green-700', currentLang === 'si');
        mobileSi.classList.toggle('border-gray-400', currentLang !== 'si');
        mobileSi.classList.toggle('text-gray-700', currentLang !== 'si');
    }
}

// Event listeners for language buttons and initial load
document.addEventListener('DOMContentLoaded', () => {
    // Apply preferred language on page load
    const initialLang = getPreferredLanguage();
    setLanguage(initialLang); // This will also update button styles and clinic hours

    // Desktop language buttons
    document.getElementById('lang-en')?.addEventListener('click', () => {
        setLanguage('en');
    });
    document.getElementById('lang-si')?.addEventListener('click', () => {
        setLanguage('si');
    });

    // Mobile language buttons
    document.getElementById('lang-en-mobile')?.addEventListener('click', () => {
        setLanguage('en');
    });
    document.getElementById('lang-si-mobile')?.addEventListener('click', () => {
        setLanguage('si');
    });
});