import { Description } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, useReactCompareSliderRef } from 'react-compare-slider';

// Функция для генерации случайного целого числа
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Section4() {
 let [arr, setArr] = useState([
    {
      imgBefore: "./Baban_Rafi_Forest_Comb_1.jpg",
      imgAfter: "./Baban_Rafi_Forest_Comb_2.jpg",
      dataBefore: "March 8, 2017",
      title: "Deforestation in Baban Rafi, Niger",
      dataAfter: "April 11, 2018",
      description: "Baban Rafi Forest is the most significant forest area in the Maradi department of Niger, a West African country on the southern edge of the Sahara Desert. Located at the southern end of the Sahel, Baban Rafi features areas of both savanna and Sahelian vegetation. These photographs show the loss of a significant portion of the natural landscape (dark green areas) of the forest due to agriculture. The population in this region has increased fourfold over the 40 years leading up to the 2007 photograph, and the intense demand for agricultural land has resulted in nearly continuous use with reduced or absent fallow periods for fertility recovery. The remaining forest areas are over-exploited for fuelwood and non-timber forest products."
    },
    {
      imgAfter: "./yearlySeaIceAge_4k.0000-2048x1536-80-before.jpg",
      imgBefore: "./yearlySeaIceAge_4k.2337-2048x1536-80-after.jpg",
      dataBefore: "August 25, 2000",
      title: "Old and Thick Sea Ice in the Arctic Melting",
      dataAfter: "August 19, 2014",
      description: "The area covered by Arctic sea ice at least four years old has shrunk from 718,000 square miles (1,860,000 square kilometers) in September 1984 to 42,000 square miles (110,000 square kilometers) in September 2016. Ice that has built up over many years is typically thicker and less prone to melting than new ice. In these visualizations, the age of the ice is indicated by shades from blue-gray for the youngest ice to white for the oldest."
    },
    {
      imgBefore: "./beaufort-sea-ice-breakup-before-2048x1536-80.jpg",
      imgAfter: "./beaufort-sea-ice-breakup-after-2048x1536-80.jpg",
      dataBefore: "August 25, 2000",
      title: "Early Ice Breakup in Beaufort Sea, Arctic",
      dataAfter: "August 19, 2014",
      description: "Ice in the Beaufort Sea, off the coast of the Arctic Ocean, experienced significant cracking and destruction by mid-April 2016, much earlier than the usual late May occurrence. NASA ice specialists link this change to unusually high air temperatures in the early months of the year and strong winds caused by a stalled high-pressure system over the area. The thicker perennial ice that once covered the region has largely given way to thinner, weaker seasonal ice that is more easily destroyed by strong winds.",
      mapLink: 'https://climate.nasa.gov/images-of-change/?intent=131&id=583#583-early-sea-ice-breakup-in-beaufort-sea-arctic'
    },
    {
      imgBefore: "./1_Aral_Sea_A.jpg",
      imgAfter: "./Aral_Sea_B.jpeg",
      dataBefore: "August 25, 2000",
      title: "Desiccation of the Aral Sea, Central Asia",
      dataAfter: "August 19, 2014",
      description: "The Aral Sea was the fourth largest lake in the world until the 1960s when the Soviet Union diverted water from the rivers feeding the lake to grow cotton and other crops in the arid plains of Kazakhstan, Uzbekistan, and Turkmenistan. The black outline shows the approximate shoreline of the lake in 1960. By the time of the 2000 photograph, the Northern Aral Sea had separated from the Southern Aral Sea, which itself split into eastern and western parts. A dam built in 2005 helped the Northern Sea regain much of its water level at the expense of the Southern Sea. Dry conditions in 2014 led to the eastern portion of the Southern Sea completely drying up for the first time in modern history. The loss of such a large water body has made winters in the region colder and summers hotter and drier. Read more in NASA's Earth Observatory."
    },
    {
      imgAfter: "./vavilov_eo_2048x1536_v2vavilovicecap_oli_2018175_lrg-after.png",
      imgBefore: "./vavilov_eo_2048x1536_v2vavilovicecap_oli_2013182_lrg-before.jpg",
      dataBefore: "August 16, 1960",
      title: "Vavilov Glacier Accelerates",
      dataAfter: "August 18, 2005",
      description: "The glacier at the western edge of the Vavilov ice cap in the Russian Arctic was sliding into the Kara Sea at a rate of several inches per day. But it began to accelerate in 2010 and went into a mode of rapid movement in 2014, moving at a rate of 82 feet (25 meters) per day by the end of 2015. It advanced more than 3 miles (5 kilometers) in just one year from April 2015 to April 2016. Scientists say this remarkable change requires a rethinking of whether other similar glaciers may be less stable than widely believed. Faster movement of land ice into the ocean could significantly accelerate sea-level rise. Read more in NASA's Earth Observatory."
    },
    {
      imgAfter: "./yearlySeaIceAge_4k.2337-2048x1536-80-after.jpg",
      imgBefore: "./yearlySeaIceAge_4k.0000-2048x1536-80-before.jpg",
      dataBefore: "September 18, 2021",
      title: "Reduction of Snow Cover on a Chilean Volcano",
      dataAfter: "October 23, 2022",
      description: "Snow-capped Villarrica is one of the volcanoes in the southern Andes of Chile. A megadrought has reduced snowfall here for more than a decade. These images, taken in the summer of the Southern Hemisphere, show the reduction of snow cover in early 2022 compared to the same period in 2018. Read more in NASA's Earth Observatory."
    },
    {
      imgAfter: "./seaIce_framePerYear_HD.2016-2048px-after (1).jpg",
      imgBefore: "./seaIce_framePerYear_HD.1979-2048px-before (1).jpg",
      dataBefore: "September 18, 2021",
      title: "Arctic Sea Ice Area Reaches Record Low",
      dataAfter: "October 23, 2022",
      description: "The area of the Arctic Ocean covered by ice increases in winter and then decreases in summer, usually reaching its lowest point of the year in September. The minimum extent in 2012 set a record low for at least since 1979 when the first reliable satellite measurements began. These images compare the minimum from 1984, which was about equal to the average minimum extent for 1979-2000, with the minimum from 2012, which was approximately half as much. The minimum in 2013 was greater but continued a long-term trend of about 12 percent loss of sea ice per decade since the late 1970s, a decline that accelerated after 2007. The minimum in 2016 was tied to the second-lowest level on record. At the rate we’re observing, it’s quite likely that summer sea ice in the Arctic will completely disappear within this century,” said NASA scientist Joey Comiso."
    },
    {
      imgAfter: "./greenland_ali_2016167_2048x1536-80-after.jpg",
      imgBefore: "./greenland_oli_2014161_2048x1536-80-before.jpg",
      dataBefore: "September 18, 2021",
      title: "Unusually Early Ice Melt in Greenland",
      dataAfter: "October 23, 2022",
      description: "Meltwater streams, rivers, and lakes form on the surface of the Greenland Ice Sheet each spring or early summer, but melting began exceptionally early in 2016. Melting promotes further melting when meltwater lakes form, as they darken the surface and absorb more sunlight than ice. Surface melting contributes to sea-level rise when water flows into the ocean and when it flows through cracks to the base of the glacier, temporarily speeding up ice movement."
    },
    {
      imgAfter: "./spalte_oli_2020206_2048px-labeled_after.jpg",
      imgBefore: "./spalte_tm5_1986228_2048px-labeled_before.jpg",
      dataBefore: "September 18, 2021",
      title: "Retreating Glaciers in the Alps",
      dataAfter: "October 23, 2022",
      description: "The rate of melting is expected to increase as the climate warms, affecting ecosystems and water resources. The high-altitude glaciers in the Alps are especially sensitive to climate change, and the effects of global warming are evident in these images. Glaciers are disappearing as summer melting exceeds winter snowfall, leading to dramatic changes in the landscape. The left image shows a glacier in 1980, and the right shows the same location in 2020."
    },
   
    {
      imgBefore: "./hudson_vir_2020195_2048x1536-before.jpg",
      imgAfter: "./hudson_vir_2020211_2048x1536-after.jpg",
      dataBefore: "Sept. 11, 2018 ",
      title: "Sea Ice Declines in Hudson Bay",
      dataAfter: "Oct. 13, 2018",
      description: "Researchers from NASA's Goddard Space Flight Center and the National Snow and Ice Data Center are monitoring the ice loss in the southern Greenland ice sheet, which has been accelerating since 2000. The left image shows a glacier in 2015, and the right shows the same glacier in 2018, highlighting the significant thinning of ice over the three-year period."
    },
    {
      imgAfter: "./iceland_tmo_2022183_2048x1536_before.jpg",
      imgBefore: "./iceland_tmo_2022194_2048x1536_after.jpg",
      dataBefore: "July 2, 2022 ",
      title: "Dusty Ice on Iceland’s Largest Glacier",
      dataAfter: "July 13, 2022",
      description: "Iceland’s largest glacier, the Vatnajökull ice cap, became partially covered in dust in late July 2022. Airborne dust is common in Iceland due to the relatively barren landscape near glaciers, rivers, and lava plains. Dust darkens the ice surface, causing it to absorb more sunlight and to melt faster. By contrast, bright white snow and ice reflect more sunlight. The Vatnajökull ice cap has lost around 15% of its volume over the past 100 years."
    },
    {
      imgBefore: "./iceland_tmo_2022183_2048x1536_before.jpg",
      imgAfter: "./iceland_tmo_2022194_2048x1536_after.jpg",
      dataBefore: "July 2, 2022 ",
      title: "Shrinking Lakes on Iberian Peninsula",
      dataAfter: "July 13, 2022",
      description: "A drought on the Iberian Peninsula, from November 2021 to at least February 2022, has had a profound effect on the area's lakes. These images show the Alto Rabagao Reservoir and a smaller lake, both in northern Portugal, before and after the drought took hold. Read more at NASA's Earth Observatory."
    },
    {
      imgBefore: "./spaindolmen_oli_2013205_2048x1536-before.jpg",
      imgAfter: "./spaindolmen_oli_2019206_lrg-after-v2.jpg",
      dataBefore: "July 2, 2022",
      title: "Shrinking Valdecañas Reservoir Exposes Spanish Stonehenge",
      dataAfter: "July 13, 2022",
      description: "When Spain built the Valdecañas Reservoir in 1963, water submerged an ancient monument called the Dolmen of Guadalperal. This array of more than 100 large rocks, considered the Spanish Stonehenge, is estimated to be 7,000 years old. Dry, hot conditions in 2019 lowered the water level enough to expose the stones. A circle and arrow mark their location in these images. Read more and see a photo of the dolmen at NASA's Earth Observatory."
    }
]);

// {
//   imgBefore: "./hummer_viking_2015164_2048x1536-80-before.jpg",
//   imgAfter: "./greenland_oli_2018167_2048x1536-80-after.jpg",
//   dataBefore: "September 18, 2021",
//   title: "Glacier Ice Thinning in Southern Greenland",
//   dataAfter: "October 23, 2022",
//   description: "Researchers from NASA's Goddard Space Flight Center and the National Snow and Ice Data Center are monitoring the ice loss in the southern Greenland ice sheet, which has been accelerating since 2000. The left image shows a glacier in 2015, and the right shows the same glacier in 2018, highlighting the significant thinning of ice over the three-year period."
// },
 // {
    //   imgAfter: "./mekong_2031_4k-after.jpg",
    //   imgBefore: "./mekong_2031_4k-before.jpg",
    //   dataBefore: "September 18, 2021",
    //   title: "Loss of the Mekong River Delta",
    //   dataAfter: "October 23, 2022",
    //   description: "Satellite images show the loss of mangroves in the Mekong Delta due to climate change, overdevelopment, and land reclamation. The lush green areas are disappearing, which threatens local ecosystems and livelihoods. Efforts are underway to restore the delta, but the effects of climate change continue to pose challenges."
    // }

  const [randomItem, setRandomItem] = useState(arr[getRandomInt(arr.length)]);
  const reactCompareSliderRef = useReactCompareSliderRef();

  // Функция для анимации перехода изображения
  useEffect(() => {
    const fireTransition = async () => {
      await new Promise(resolve => setTimeout(() => {
        reactCompareSliderRef.current?.setPosition(75);
        resolve(true);
      }, 750));
      await new Promise(resolve => setTimeout(() => {
        reactCompareSliderRef.current?.setPosition(25);
        resolve(true);
      }, 750));
      await new Promise(resolve => setTimeout(() => {
        reactCompareSliderRef.current?.setPosition(50);
        resolve(true);
      }, 750));
    };

    fireTransition();
  }, [reactCompareSliderRef]);

  // Функция для обновления случайного изображения
  const updateRandomItem = () => {
    const randomIndex = getRandomInt(arr.length);
    setRandomItem(arr[randomIndex]);
  };

  // Используем setInterval для обновления изображения каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(updateRandomItem, 5000); // 5000 миллисекунд = 5 секунд
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [arr]);

  return (
    <div style={{
      display: 'flex',
      flexGrow: 1,
      position: 'relative'
    }}>
      <ReactCompareSlider transition="0.25s cubic-bezier(.17,.67,.83,.67)" ref={reactCompareSliderRef} itemOne={<ReactCompareSliderImage src={randomItem.imgBefore} alt="Image one" />} itemTwo={<ReactCompareSliderImage src={randomItem.imgAfter} alt="Image two" style={{
      filter: 'saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)',
    }} />} style={{
      backgroundColor : "white",
  backgroundImage : " linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
  backgroundSize : "20px 20px",
  backgroundPosition : "0 0, 0 10px, 10px -10px, -10px 0px",
      width: '100%',
      height: '75vh',
      position: 'relative'
    }} />;
  
  <span style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'white',
        pointerEvents: 'none',
        borderRadius: '0 0 0.25rem 0'
      }}>
         <h1>{randomItem.dataBefore}</h1>
         </span>
  
         <span style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'white',
        pointerEvents: 'none',
        borderRadius: '0 0 0.25rem 0'
      }}>
         <h1>Before</h1>
         </span>
  
         
         <span style={{
        position: 'absolute',
        top: '50%',
        right: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'white',
        pointerEvents: 'none',
        borderRadius: '0 0 0.25rem 0'
      }}>
         <h1>After</h1>
         </span>
  
        <span style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'white',
        pointerEvents: 'none',
        borderRadius: '0 0 0.25rem 0'
      }}>
               <h1>{randomItem.dataAfter}</h1>
        </span>
  
        <button type="button" onClick={() => {
      }} style={{
        position: 'absolute',
        left: '50%',
        fontSize: '1.5rem',
        color: '#262626',
        fontWeight: 'bold',
        transform: 'translateX(-50%)'
      }}>
          {randomItem.title}
        </button>
      </div>
  );
}
