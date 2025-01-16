const dramas = [
    {
        thumbnail: 'images/1.jpg',
        title: 'Andhera Ujala',
        romanTitle: 'andhera ujala',
        alternateSpellings: ['andera ujala', 'undera ujhala', 'andhera ujhala'],
        year: '1984',
        category: 'drama',
        actors: ['Qavi Khan', 'Mahmood Ali'],
        producer: 'Mohsin Ali',
        director: 'Rashid Dar',
        writer: 'Younus Javed'
    },
    {
        thumbnail: 'images/2.jpeg',
        title: 'Taleem-e-Balighan',
        romanTitle: 'taleem e balighan',
        alternateSpellings: ['taleem-e-balighan', 'taleem e baligan', 'talim e baligan'],
        year: '1956',
        category: 'comedy',
        actors: ['Qavi Khan', 'Zaheen Tahira'],
        producer: 'Aslam Azhar',
        director: 'Sheila Malik',
        writer: 'Munnu Bhai'
    },
    {
        thumbnail: 'images/3.jpeg   ',
        title: 'Do Bol',
        romanTitle: 'do bol',
        alternateSpellings: ['do bol', 'aseer e mohabbat'],
        year: '2019',
        category: 'romantic drama',
        actors: ['Hira Mani', 'Affan Waheed'],
        producer: ['Humayun Saeed', 'Shahzad Nasib'],
        director: 'Syed Wajahat Hussain',
        writer: 'Sarwat Nazir',
        description: 'Do Bol (Urdu: دو بول, lit. ‘Two Words’) previously titled Aseer e Mohabbat is a 2019 Pakistani romantic drama television series that originally aired on ARY Digital from 5 March 2019 to 5 May 2019.'
    },
    {
        thumbnail: 'images/4.jpg',
        title: 'Dastaan',
        romanTitle: 'dastaan',
        alternateSpellings: ['dastaan', 'the tale'],
        year: '2010',
        category: 'historical drama',
        actors: ['Bano (fictional character)'],
        producer: null,
        director: 'Haissam Hussain',
        writer: 'Samira Fazal',
        description: 'Dastaan (Urdu: داستان, lit. ‘The tale’) is a Pakistani television series based on the 1971 novel Bano by Razia Butt. Dramatized by author and screenwriter Samira Fazal, it originally aired on Hum TV in 2010. It is set amidst the partition of India and the establishment of Pakistan, taking place between 1947 and 1956. It depicts the story of Bano, a Muslim girl from a close-knit family living in Ludhiana, Punjab Province; the plot revolves around the trials and tribulations that she faces after she decides to dedicate her life to the All-India Muslim League.'
    },
    {
        thumbnail: 'images/5.jpg',
        title: 'Gul-o-Gulzar',
        romanTitle: 'gul o gulzar',
        alternateSpellings: ['gul-o-gulzar', 'gul o gulzar'],
        year: '2019',
        category: 'drama',
        actors: ['Saboor Aly', 'Kinza Hashmi'],
        producer: ['Humayun Saeed', 'Shahzad Nasib'],
        director: null,
        writer: null,
        description: 'Gul-o-Gulzar (Urdu: گل و گلزار, lit. ‘Gul and Gulzar’) is a 2019 Pakistani television series created by Humayun Saeed and Shahzad Nasib under their production house Six Sigma Plus. It focuses on the life of two best friends turned enemies; Gul and Gulzar played by Saboor Aly and Kinza Hashmi, respectively. The serial aired every Thursday evening on ARY Digital. It was broadcast by MBC Bollywood in Arab countries under the title جل و جلزار. The series is available on Indian OTT Platform MX Player.'
    },
    {
        thumbnail: 'images/6.png',
        title: 'Humsafar',
        romanTitle: 'humsafar',
        alternateSpellings: ['hum safar', 'humsafar'],
        year: '2011',
        category: 'romantic drama',
        actors: ['Fawad Khan', 'Mahira Khan', 'Naveen Waqar', 'Atiqa Odho', 'Hina Khawaja Bayat', 'Behroze Sabzwari', 'Noor Hassan Rizvi'],
        producer: null,
        director: 'Sarmad Sultan Khoosat',
        writer: 'Farhat Ishtiaq',
        description: 'Humsafar (Urdu: ہم سفر, lit. ‘Companion or Life Partner’) is a 2011 Pakistani television series based on the novel of the same name by Farhat Ishtiaq (who also wrote the screenplay) and directed by Sarmad Sultan Khoosat. It stars Fawad Khan, Mahira Khan, Naveen Waqar in lead roles and Atiqa Odho, Hina Khawaja Bayat, Behroze Sabzwari and Noor Hassan Rizvi in supporting roles. The series was first broadcast on 24 September 2011 on Hum TV. Humsafar became the most successful program on the channel at the time, earning it widespread acclaim and international recognition. Due to its success, critics referred to this era of Pakistani television as a “Golden Age.” It was claimed as the highest-rated serial of its time in Pakistan, with the TRPs of 10.71, peaking at 13.9 TRPs.'
    },
    {
        thumbnail: 'images/7.jpg',
        title: 'Gul-e-Rana',
        romanTitle: 'gul e rana',
        alternateSpellings: ['gul-e-rana', 'gul e rana'],
        year: '2015',
        category: 'drama',
        actors: ['Sajal Aly', 'Feroze Khan', 'Mehmood Akhtar', 'Rubina Ashraf', 'Jinaan Hussain'],
        producer: ['Momina Duraid', 'Humayun Saeed', 'Shehzad Naseeb'],
        director: 'Farooq Rind',
        writer: 'Samra Bukhari',
        description: 'Gul-e-Rana (Urdu: گل رعنا, lit. ‘Sweet-smelling flower’) is a Pakistani drama serial based on a novel by Samra Bukhari titled Hasti Ke Ahang. The drama premiered on 7 November 2015 on Hum TV. It was directed by Farooq Rind and produced by Momina Duraid along with Humayun Saeed and Shehzad Naseeb. It stars Sajal Aly and Feroze Khan with a supporting cast of Mehmood Akhtar, Rubina Ashraf, and Jinaan Hussain. Gul-e-Rana was known as one of the popular series during its run. It received negative reviews and has been criticized for its misogynistic, sexist, and regressive approach. Aly’s performance in the title role was however praised, earning her the Hum Award for Best Actress and a nomination for Best TV Actress at the 16th Lux Style Awards.'
    },
    {
        thumbnail: 'images/01.jpg',
        title: 'Muhabbat Yun Bhi Hoti Hai',
        romanTitle: 'muhabbat yun bhi hoti hai',
        alternateSpellings: ['muhabbat yun bhi hoti hai'],
        year: '2015',
        category: 'Romantic Drama',
        actors: ['Actor 1', 'Actor 2'],
        producer: 'HUM Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/02.jpg',
        title: 'Main Khayal Hoon Kisi Aur Ka',
        romanTitle: 'main khayal hoon kisi aur ka',
        alternateSpellings: ['main khayal hoon kisi aur ka'],
        year: '2018',
        category: 'Romantic Drama',
        actors: ['Actor 1', 'Actor 2'],
        producer: 'ARY Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/03.jpeg',
        title: 'Maat',
        romanTitle: 'maat',
        alternateSpellings: ['maat'],
        year: '2011',
        category: 'Family Drama',
        actors: ['Aamina Sheikh', 'Saba Qamar'],
        producer: 'HUM Productions',
        director: 'Amna Nawaz Khan',
        writer: 'Umera Ahmed'
    },
    {
        thumbnail: 'images/04.jpeg',
        title: 'Madiha Maliha',
        romanTitle: 'madiha maliha',
        alternateSpellings: ['madiha maliha'],
        year: '2012',
        category: 'Social Drama',
        actors: ['Junaid Khan', 'Zhalay Sarhadi'],
        producer: 'HUM Productions',
        director: 'Roomi Insha',
        writer: 'Dilawar Khan'
    },
    {
        thumbnail: 'images/05.jpeg',
        title: 'Mah-e-Tamaam',
        romanTitle: 'mah-e-tamaam',
        alternateSpellings: ['mah-e-tamaam'],
        year: '2018',
        category: 'Romantic Drama',
        actors: ['Emmad Irfani', 'Naveen Waqar'],
        producer: 'HUM Productions',
        director: 'Syed Ahmed Kamran',
        writer: 'Amna Riaz'
    },
    {
        thumbnail: 'images/06.jpg',
        title: 'Main Abdul Qadir Hoon',
        romanTitle: 'main abdul qadir hoon',
        alternateSpellings: ['main abdul qadir hoon'],
        year: '2010',
        category: 'Inspirational Drama',
        actors: ['Fahad Mustafa', 'Alishba Yousuf'],
        producer: 'ARY Productions',
        director: 'Babar Javed',
        writer: 'Sarwat Nazir'
    },
    {
        thumbnail: 'images/07.jpeg',
        title: 'Main Chand Si',
        romanTitle: 'main chand si',
        alternateSpellings: ['main chand si'],
        year: '2011',
        category: 'Romantic Drama',
        actors: ['Fahad Mustafa', 'Sanam Baloch'],
        producer: 'HUM Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/08.jpg',
        title: 'Main Gunehgar Nahi',
        romanTitle: 'main gunehgar nahi',
        alternateSpellings: ['main gunehgar nahi'],
        year: '2013',
        category: 'Social Drama',
        actors: ['Mawra Hocane', 'Sami Khan'],
        producer: 'ARY Productions',
        director: 'Director Name',
        writer: 'Faiza Iftikhar'
    },
    {
        thumbnail: 'images/09.jpg',
        title: 'Main Manto',
        romanTitle: 'main manto',
        alternateSpellings: ['main manto'],
        year: '2015',
        category: 'Biographical Drama',
        actors: ['Sarmad Khoosat', 'Sania Saeed'],
        producer: 'HUM Productions',
        director: 'Sarmad Khoosat',
        writer: 'Shamim Baazil'
    },
    {
        thumbnail: 'images/10.jpg',
        title: 'Malaal',
        romanTitle: 'malaal',
        alternateSpellings: ['malaal'],
        year: '2009',
        category: 'Romantic Drama',
        actors: ['Faisal Rehman', 'Deepti Gupta'],
        producer: 'ARY Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/11.jpg',
        title: 'Malika-e-Aliya',
        romanTitle: 'malika-e-aliya',
        alternateSpellings: ['malika-e-aliya'],
        year: '2014',
        category: 'Social Drama',
        actors: ['Maria Wasti', 'Annie Jaffri'],
        producer: 'ARY Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/12.jpg',
        title: 'Manay Na Ye Dil',
        romanTitle: 'manay na ye dil',
        alternateSpellings: ['manay na ye dil'],
        year: '2007',
        category: 'Romantic Drama',
        actors: ['Faisal Qureshi', 'Aamina Sheikh'],
        producer: 'HUM Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/13.png',
        title: 'Mann Ke Moti',
        romanTitle: 'mann ke moti',
        alternateSpellings: ['mann ke moti'],
        year: '2013',
        category: 'Family Drama',
        actors: ['Fahad Mustafa', 'Asma Abbas'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/14.jpg',
        title: 'Mann Mayal',
        romanTitle: 'mann mayal',
        alternateSpellings: ['mann mayal'],
        year: '2016',
        category: 'Romantic Drama',
        actors: ['Hamza Ali Abbasi', 'Maya Ali'],
        producer: 'HUM Productions',
        director: 'Haseeb Hassan',
        writer: 'Samira Fazal'
    },
    {
        thumbnail: 'images/15.png',
        title: 'Mannchalay',
        romanTitle: 'mannchalay',
        alternateSpellings: ['mannchalay'],
        year: '2009',
        category: 'Comedy Drama',
        actors: ['Farhan Ally Agha', 'Deepti Gupta'],
        producer: 'HUM Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/16.jpg',
        title: 'Mata-e-Jaan Hai Tu',
        romanTitle: 'mata-e-jaan hai tu',
        alternateSpellings: ['mata-e-jaan hai tu'],
        year: '2012',
        category: 'Romantic Drama',
        actors: ['Adeel Hussain', 'Sarwat Gilani'],
        producer: 'HUM Productions',
        director: 'Mehreen Jabbar',
        writer: 'Farhat Ishtiaq'
    },
    {
        thumbnail: 'images/17.jpg',
        title: 'Mar Jain Bhi To Kya',
        romanTitle: 'mar jain bhi to kya',
        alternateSpellings: ['mar jain bhi to kya'],
        year: '2012',
        category: 'Family Drama',
        actors: ['Sonya Hussyn', 'Junaid Khan'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/18.jpg',
        title: 'Marasim',
        romanTitle: 'marasim',
        alternateSpellings: ['marasim'],
        year: '2014',
        category: 'Romantic Drama',
        actors: ['Ahsan Khan', 'Saba Hameed'],
        producer: 'ARY Productions',
        director: 'Roomi Insha',
        writer: 'Zanjabeel Asim Shah'
    },
    {
        thumbnail: 'images/22.jpg',
        title: 'Marvi',
        romanTitle: 'marvi',
        alternateSpellings: ['marvi'],
        year: '1993',
        category: 'Classical Drama',
        actors: ['Ghazanfar Ali', 'Huma Nawab'],
        producer: 'PTV Productions',
        director: 'Sultana Siddiqui',
        writer: 'Anwar Maqsood'
    },
    {
        thumbnail: 'images/21.jpg',
        title: 'Mehndi',
        romanTitle: 'mehndi',
        alternateSpellings: ['mehndi'],
        year: '2003',
        category: 'Family Drama',
        actors: ['Fiza Ali', 'Ayesha Khan'],
        producer: 'PTV Productions',
        director: 'Director Name',
        writer: 'Seema Ghazal'
    },
    {
        thumbnail: 'images/20.jpg',
        title: 'Mehram',
        romanTitle: 'mehram',
        alternateSpellings: ['mehram'],
        year: '2014',
        category: 'Social Drama',
        actors: ['Ayesha Khan', 'Zahid Ahmed'],
        producer: 'HUM Productions',
        director: 'Director Name',
        writer: 'Zoya Akhtar'
    },
    {
        thumbnail: 'images/19.jpg',
        title: 'Meri Beti',
        romanTitle: 'meri beti',
        alternateSpellings: ['meri beti'],
        year: '2013',
        category: 'Family Drama',
        actors: ['Samina Peerzada', 'Junaid Khan'],
        producer: 'ARY Productions',
        director: 'Roomi Insha',
        writer: 'Mohammad Ahmed'
    },
    {
        thumbnail: 'images/26.jpg',
        title: 'Meri Guriya',
        romanTitle: 'meri guriya',
        alternateSpellings: ['meri guriya'],
        year: '2018',
        category: 'Crime Drama',
        actors: ['Sana Fakhar', 'Mohsin Abbas Haider'],
        producer: 'ARY Productions',
        director: 'Ali Hassan',
        writer: 'Radain Shah'
    },
    {
        thumbnail: 'images/25.jpg',
        title: 'Meri Ladli',
        romanTitle: 'meri ladli',
        alternateSpellings: ['meri ladli'],
        year: '2012',
        category: 'Family Drama',
        actors: ['Sajal Aly', 'Sami Khan'],
        producer: 'ARY Productions',
        director: 'Roomi Insha',
        writer: 'Mohammad Ahmed'
    },
    {
        thumbnail: 'images/24.jpg',
        title: 'Meri Zaat Zarra-e-Benishan',
        romanTitle: 'meri zaat zarra-e-benishan',
        alternateSpellings: ['meri zaat zarra-e-benishan'],
        year: '2009',
        category: 'Romantic Drama',
        actors: ['Samiya Mumtaz', 'Imran Abbas'],
        producer: 'Geo Productions',
        director: 'Babar Javed',
        writer: 'Umera Ahmed'
    },
    {
        thumbnail: 'images/23.jpeg',
        title: 'Mirat-ul-Uroos',
        romanTitle: 'mirat-ul-uroos',
        alternateSpellings: ['mirat-ul-uroos'],
        year: '2013',
        category: 'Social Drama',
        actors: ['Mehreen Raheel', 'Amina Sheikh'],
        producer: 'Geo Productions',
        director: 'Zeeshan Ahmed',
        writer: 'Umera Ahmed'
    },
    {
        thumbnail: 'images/27.jpg',
        title: 'Mohabbat Ab Nahi Hogi',
        romanTitle: 'mohabbat ab nahi hogi',
        alternateSpellings: ['mohabbat ab nahi hogi'],
        year: '2014',
        category: 'Romantic Drama',
        actors: ['Ali Rehman Khan', 'Hareem Farooq'],
        producer: 'HUM Productions',
        director: 'Sakina Samo',
        writer: 'Saima Akram Chaudhry'
    },
    {
        thumbnail: 'images/28.jpg',
        title: 'Mohabbat Tumse Nafrat Hai',
        romanTitle: 'mohabbat tumse nafrat hai',
        alternateSpellings: ['mohabbat tumse nafrat hai'],
        year: '2017',
        category: 'Romantic Drama',
        actors: ['Imran Abbas', 'Ayeza Khan'],
        producer: '7th Sky Entertainment',
        director: 'Farooq Rind',
        writer: 'Khalil-ur-Rehman Qamar'
    },
    {
        thumbnail: 'images/29.jpg',
        title: 'Mohabbat Zindagi Hai',
        romanTitle: 'mohabbat zindagi hai',
        alternateSpellings: ['mohabbat zindagi hai'],
        year: '2017',
        category: 'Family Drama',
        actors: ['Hina Dilpazeer', 'Shabbir Jan'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/30.jpeg',
        title: 'Mohabbat.pk',
        romanTitle: 'mohabbat.pk',
        alternateSpellings: ['mohabbat.pk'],
        year: '2017',
        category: 'Romantic Comedy',
        actors: ['Imran Ashraf', 'Iqra Aziz'],
        producer: 'HUM Productions',
        director: 'Ali Hassan',
        writer: 'Saima Akram Chaudhry'
    },
    {
        thumbnail: 'images/35.webp',
        title: 'Mohabbatain Chahatain',
        romanTitle: 'mohabbatain chahatain',
        alternateSpellings: ['mohabbatain chahatain'],
        year: '2020',
        category: 'Romantic Drama',
        actors: ['Junaid Khan', 'Hira Mani'],
        producer: 'HUM Productions',
        director: 'Ali Hassan',
        writer: 'Samira Fazal'
    },
    {
        thumbnail: 'images/34.jpg',
        title: 'Mora Piya',
        romanTitle: 'mora piya',
        alternateSpellings: ['mora piya'],
        year: '2013',
        category: 'Romantic Drama',
        actors: ['Adeel Hussain', 'Amina Sheikh'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/33.jpeg',
        title: 'Mujhe Jeene Do',
        romanTitle: 'mujhe jeene do',
        alternateSpellings: ['mujhe jeene do'],
        year: '2017',
        category: 'Social Drama',
        actors: ['Nadia Jamil', 'Hania Amir'],
        producer: 'Paragon Productions',
        director: 'Director Name',
        writer: 'Zafar Mairaj'
    },
    {
        thumbnail: 'images/32.jpg',
        title: 'Mujhe Roothne Na Dena',
        romanTitle: 'mujhe roothne na dena',
        alternateSpellings: ['mujhe roothne na dena'],
        year: '2019',
        category: 'Family Drama',
        actors: ['Kiran Haq', 'Muneeb Butt'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/31.jpg',
        title: 'Mujhe Wida Kar',
        romanTitle: 'mujhe wida kar',
        alternateSpellings: ['mujhe wida kar'],
        year: '2021',
        category: 'Social Drama',
        actors: ['Saba Faisal', 'Sana Fakhar'],
        producer: 'ARY Productions',
        director: 'Director Name',
        writer: 'Samina Ijaz'
    },
    {
        thumbnail: 'images/36.jpg',
        title: 'Mujrim',
        romanTitle: 'mujrim',
        alternateSpellings: ['mujrim'],
        year: '2018',
        category: 'Crime Drama',
        actors: ['Sami Khan', 'Kinza Hashmi'],
        producer: 'Geo Productions',
        director: 'Director Name',
        writer: 'Writer Name'
    },
    {
        thumbnail: 'images/37.jpg',
        title: 'Muqaddar',
        romanTitle: 'muqaddar',
        alternateSpellings: ['muqaddar'],
        year: '2020',
        category: 'Romantic Drama',
        actors: ['Faysal Qureshi', 'Madiha Imam'],
        producer: '7th Sky Entertainment',
        director: 'Director Name',
        writer: 'Iqbal Bano'
    },
    {
        thumbnail: 'images/38.jpg',
        title: 'Muqaddar Ka Sitara',
        romanTitle: 'muqaddar ka sitara',
        alternateSpellings: ['muqaddar ka sitara'],
        year: '2023',
        category: 'Family Drama',
        actors: ['Fatima Effendi', 'Arez Ahmed'],
        producer: '7th Sky Entertainment',
        director: 'Director Name',
        writer: 'Sadia Akhtar'
    },
    {
        thumbnail: 'images/39.jpg',
        title: 'Muqaddas',
        romanTitle: 'muqaddas',
        alternateSpellings: ['muqaddas'],
        year: '2015',
        category: 'Thriller Drama',
        actors: ['Noor Hassan', 'Iqra Aziz'],
        producer: 'MD Productions',
        director: 'Ali Masud Saeed',
        writer: 'Adeel Razzaq'
    },
    {
        thumbnail: 'images/40.jpg',
        title: 'Jannat Se Aagay',
        romanTitle: 'jannat se aagay',
        alternateSpellings: ['jannat se agay', 'jannat se aagay'],
        year: '2023',
        category: 'Drama',
        actors: ['Kubra Khan', 'Ramsha Khan', 'Gohar Rasheed', 'Talha Chahour'],
        producer: 'Abdullah Kadwani and Asad Qureshi',
        director: 'Haseeb Hassan',
        writer: 'Umera Ahmed'
    },
    {
        thumbnail: 'images/41.jpg', 
        title: 'Mujhe Pyaar Hua Tha',
        romanTitle: 'mujhe pyaar hua tha',
        alternateSpellings: ['mujhe pyaar hua tha'],
        year: '2022',
        category: 'Romantic Drama',
        actors: ['Wahaj Ali', 'Hania Aamir', 'Zaviyar Nauman Ijaz', 'Rabya Kulsoom', 'Salma Hassan', 'Shaheen Khan', 'Angeline Malik'],
        producer: 'Fahad Mustafa and Dr. Ali Kazmi',
        director: 'Badar Mehmood',
        writer: 'Sidra Seher Imran'
    },
    {
        thumbnail: 'images/42.jpg',
        title: 'Mere Humsafar',
        romanTitle: 'mere humsafar',
        alternateSpellings: ['mere humsafar'],
        year: '2021',
        category: 'Romantic Drama',
        actors: ['Farhan Saeed', 'Hania Aamir', 'Saba Hameed', 'Waseem Abbas', 'Samina Ahmad', 'Zoya Nasir', 'Omer Shahzad'],
        producer: 'Humayun Saeed and Shehzad Naseeb',
        director: 'Qasim Ali Mureed',
        writer: 'Saira Raza'
    },
    {
        thumbnail: 'images/43.jpeg',
        title: 'Khuda Aur Muhabbat 2',
        romanTitle: 'khuda aur muhabbat',
        alternateSpellings: ['khuda aur mohabbat'],
        year: '2011',
        category: 'Spiritual-Romantic Drama',
        actors: ['Imran Abbas Naqvi', 'Sadia Khan'],
        producer: 'Not specified', 
        director: 'Not specified', 
        writer: 'Hashim Nadeem'
    },
    {
        thumbnail: 'images/44.jpg', 
        title: 'Khuda Aur Muhabbat',
        romanTitle: 'khuda aur muhabbat',
        alternateSpellings: ['khuda aur mohabbat'],
        year: '2011',
        category: 'Spiritual-Romantic Drama',
        actors: ['Imran Abbas Naqvi', 'Sadia Khan'],
        producer: 'Not specified',
        director: 'Not specified',
        writer: 'Hashim Nadeem'
    },
    {
        thumbnail: 'images/45.png',
        title: 'Chupke Chupke',
        romanTitle: 'chupke chupke',
        alternateSpellings: ['chupke chupke'],
        year: '2021',
        category: 'Romantic Comedy',
        actors: ['Ayeza Khan', 'Osman Khalid Butt', 'Aymen Saleem', 'Arslan Naseer', 'Uzma Beg', 'Asma Abbas', 'Mira Sethi', 'Ali Safina'],
        producer: 'Momina Duraid',
        director: 'Danish Nawaz',
        writer: 'Saima Akram Chaudhry'
    }
];


// Minimum Edit Distance Implementation
function getMinimumEditDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    
    const dp = Array(s1.length + 1).fill(null)
        .map(() => Array(s2.length + 1).fill(0));

    // Initialize first row and column
    for(let i = 0; i <= s1.length; i++) dp[i][0] = i;
    for(let j = 0; j <= s2.length; j++) dp[0][j] = j;

    // Fill the matrix
    for(let i = 1; i <= s1.length; i++) {
        for(let j = 1; j <= s2.length; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(
                    dp[i-1][j] + 1,  // deletion
                    dp[i][j-1] + 1,  // insertion
                    dp[i-1][j-1] + 1 // substitution
                );
            }
        }
    }

    return dp[s1.length][s2.length];
}

// Function to find similar dramas based on minimum edit distance
function findSimilarDramas(searchTerm, threshold = 3) {
    const similar = [];
    
    dramas.forEach(drama => {
        // Check main title
        const distance = getMinimumEditDistance(searchTerm, drama.romanTitle);
        if (distance <= threshold) {
            similar.push({ drama, distance });
            return;
        }

        // Check alternate spellings
        for (const spelling of drama.alternateSpellings) {
            const altDistance = getMinimumEditDistance(searchTerm, spelling);
            if (altDistance <= threshold) {
                similar.push({ drama, distance: altDistance });
                return;
            }
        }
    });

    return similar.sort((a, b) => a.distance - b.distance);
}

// Function to create drama card
function createDramaCard(drama) {
    return `
        <div class="drama-card">
            <img src="${drama.thumbnail}" alt="${drama.title}" class="thumbnail">
            <div class="drama-info">
                <h3 class="drama-title">${drama.title}</h3>
                <p class="drama-details">${drama.year}</p>
                <div class="tags">
                    ${drama.actors.map(actor => `<span class="tag" onclick="searchByTag('actor', '${actor}')">${actor}</span>`).join('')}
                    <span class="tag" onclick="searchByTag('producer', '${drama.producer}')">${drama.producer}</span>
                    <span class="tag" onclick="searchByTag('director', '${drama.director}')">${drama.director}</span>
                    <span class="tag" onclick="searchByTag('writer', '${drama.writer}')">${drama.writer}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display similar results
function displaySimilarResults(results) {
    const similarList = document.getElementById('similarList');
    const similarResults = document.getElementById('similarResults');
    
    if (results.length === 0) {
        similarResults.style.display = 'none';
        return;
    }

    similarList.innerHTML = results.map(result => `
        <div class="similar-item" onclick="selectDrama('${result.drama.romanTitle}')">
            ${result.drama.title} (Distance: ${result.distance})
        </div>
    `).join('');
    
    similarResults.style.display = 'block';
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchType = document.getElementById('searchType');
    const searchTerm = searchInput.value.toLowerCase();
    const type = searchType.value;

    const videosContainer = document.querySelector('.videos-container');
    videosContainer.innerHTML = '';

    if (type === 'name') {
        const similarResults = findSimilarDramas(searchTerm);
        displaySimilarResults(similarResults);
        
        if (similarResults.length > 0) {
            similarResults.forEach(result => {
                videosContainer.innerHTML += createDramaCard(result.drama);
            });
        }
    } else {
        const filteredDramas = dramas.filter(drama => {
            switch(type) {
                case 'year':
                    return drama.year.includes(searchTerm);
                case 'actor':
                    return drama.actors.some(actor => actor.toLowerCase().includes(searchTerm));
                case 'producer':
                    return drama.producer.toLowerCase().includes(searchTerm);
                case 'director':
                    return drama.director.toLowerCase().includes(searchTerm);
                case 'writer':
                    return drama.writer.toLowerCase().includes(searchTerm);
                default:
                    return false;
            }
        });

        filteredDramas.forEach(drama => {
            videosContainer.innerHTML += createDramaCard(drama);
        });
        document.getElementById('similarResults').style.display = 'none';
    }
}

// Filter by category
function filterByCategory(category) {
    const videosContainer = document.querySelector('.videos-container');
    videosContainer.innerHTML = '';

    const filteredDramas = category === 'all' 
        ? dramas 
        : dramas.filter(drama => drama.category === category);

    filteredDramas.forEach(drama => {
        videosContainer.innerHTML += createDramaCard(drama);
    });
    document.getElementById('similarResults').style.display = 'none';
}

// Search by clicking on tags
function searchByTag(type, value) {
    document.getElementById('searchType').value = type;
    document.getElementById('searchInput').value = value;
    performSearch();
}

// Select drama from similar results
function selectDrama(title) {
    document.getElementById('searchInput').value = title;
    performSearch();
}

// Initialize page with all dramas
document.addEventListener('DOMContentLoaded', () => {
    filterByCategory('all');
});
