import { Description } from '@mui/icons-material';
import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, useReactCompareSliderRef } from 'react-compare-slider';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function Section4 () {
  
  let [arr, setArr] = useState([
    
    {
      imgBefore: "src/components/pages/home/section1/img/Baban_Rafi_Forest_Comb_1.jpg",
      imgAfter: "src/components/pages/home/section1/img/Baban_Rafi_Forest_Comb_2.jpg",
      dataBefore: "8 марта 2017 г.",
      title: "Вырубка лесов Бабан Рафи, Нигер",
      dataAfter: "11 апреля 2018 г.",
      description: "Лес Бабан Рафи — самая значительная лесная зона в департаменте Маради Нигера, западноафриканской страны на южной окраине пустыни Сахара. Расположенный на южной оконечности Сахеля, Бабан Рафи имеет области как саванной, так и сахелианской растительности. Эти фотографии показывают потерю значительной части естественного ландшафта (темно-зеленые области) леса из-за сельского хозяйства. Население в этом регионе увеличилось в четыре раза за 40 лет, предшествовавших снимку 2007 года, а интенсивный спрос на сельскохозяйственные земли привел к почти непрерывному использованию с сокращенным или отсутствующим периодом залегания для восстановления плодородия. Оставшиеся лесные массивы чрезмерно эксплуатируются для получения топливной древесины и недревесных лесных продуктов. "
    },
    {
      imgAfter: "src/components/pages/home/section1/img/yearlySeaIceAge_4k.0000-2048x1536-80-before.jpg",
      imgBefore: "src/components/pages/home/section1/img/yearlySeaIceAge_4k.2337-2048x1536-80-after.jpg",
      dataBefore: "25 августа 2000 г.",
      title: "Старый и толстый морской лед в Арктике тает",
      dataAfter: "19 августа 2014 г.",
      description: "Площадь, покрытая арктическим морским льдом возрастом не менее четырех лет, сократилась с 718 000 квадратных миль (1 860 000 квадратных километров) в сентябре 1984 года до 42 000 квадратных миль (110 000 квадратных километров) в сентябре 2016 года. Лед, который нарастал в течение многих лет, как правило, толще и менее подвержен таянию, чем новый лед. В этих визуализациях данных с буев, метеостанций, спутников и компьютерных моделей возраст льда обозначен оттенками от сине-серого для самого молодого льда до белого для самого старого.  "
    },
    {
      imgBefore: "src/components/pages/home/section1/img/beaufort-sea-ice-breakup-before-2048x1536-80.jpg",
      imgAfter: "src/components/pages/home/section1/img/beaufort-sea-ice-breakup-after-2048x1536-80.jpg",
      dataBefore: "25 августа 2000 г.",
      title: "Ранний ледоход в море Бофорта, Арктика",
      dataAfter: "19 августа 2014 г.",
      description: "Лед в море Бофорта, у берегов Северного Ледовитого океана, претерпел значительные трещины и разрушения к середине апреля 2016 года, значительно раньше, чем в конце мая, когда это обычно происходит. Специалисты по льду NASA связывают это изменение с необычно высокой температурой воздуха в первые месяцы года и сильными ветрами, вызванными застопорившейся системой высокого давления над этим районом. Более толстый многолетний лед, который когда-то покрывал регион, в значительной степени уступил место сезонному однолетнему льду, который тоньше, слабее и легче разрушается сильными ветрами.",
      mapLink: 'https://climate.nasa.gov/images-of-change/?intent=131&id=583#583-early-sea-ice-breakup-in-beaufort-sea-arctic'
    },
    {
      imgBefore: "src/components/pages/home/section1/img/1_Aral_Sea_A.jpg",
      imgAfter: "src/components/pages/home/section1/img/Aral_Sea_B.jpeg",
      dataBefore: "25 августа 2000 г.",
      title: "Высыхание Аральского моря, Центральная Азия",
      dataAfter: "19 августа 2014 г.",
      description: "Аральское море было четвертым по величине озером в мире до 1960-х годов, когда Советский Союз отвел воду из рек, питавших озеро, чтобы хлопок и другие культуры можно было выращивать на засушливых равнинах Казахстана, Узбекистана и Туркменистана. Черный контур показывает примерную береговую линию озера в 1960 году. К моменту создания снимка 2000 года Северное Аральское море отделилось от Южного Аральского моря, которое само разделилось на восточную и западную части. Плотина, построенная в 2005 году, помогла северному морю восстановить большую часть своего уровня воды за счет южного моря. Засушливые условия 2014 года привели к тому, что восточная часть южного моря полностью высохла впервые в современную эпоху. Утрата смягчающего влияния такого большого водоема сделала зимы в регионе холоднее, а лето жарче и суше. Подробнее читайте в NASA's Earth Observatory."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/vavilov_eo_2048x1536_v2vavilovicecap_oli_2018175_lrg-after.png",
      imgBefore: "src/components/pages/home/section1/img/vavilov_eo_2048x1536_v2vavilovicecap_oli_2013182_lrg-before.jpg",
      dataBefore: "16 августа 1960 г.",
      title: "Ледник Вавилова ускоряется",
      dataAfter: "18 августа 2005 г.",
      description: "Ледник на западном краю ледникового покрова Вавилова в российской Арктике сползал в Карское море со скоростью несколько дюймов в день. Но он начал ускоряться в 2010 году и перешел в режим ускорения в 2014 году, перемещаясь со скоростью 82 фута (25 метров) в день к концу 2015 года. Он продвинулся более чем на 3 мили (5 километров) всего за год с апреля 2015 года по апрель 2016 года. Ученые говорят, что поразительное изменение требует переосмысления того, могут ли другие, похожие ледники быть менее стабильными, чем широко предполагается. Более быстрое движение наземного льда в океан может значительно ускорить повышение уровня моря. Подробнее читайте в NASA's Earth Observatory ."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/yearlySeaIceAge_4k.2337-2048x1536-80-after.jpg",
      imgBefore: "src/components/pages/home/section1/img/yearlySeaIceAge_4k.0000-2048x1536-80-before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Уменьшение снежной шапки на чилийском вулкане",
      dataAfter: "23 октября 2022 г.",
      description: "Заснеженная Вильяррика — один из вулканов в южных Андах Чили. Мегазасуха сократила количество выпавших здесь снегов более чем на десятилетие. Эти снимки, сделанные летом в Южном полушарии, показывают уменьшение снежного покрова в начале 2022 года по сравнению с тем же периодом в 2018 году. Подробнее читайте в NASA's Earth Observatory ."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/seaIce_framePerYear_HD.2016-2048px-after (1).jpg",
      imgBefore: "src/components/pages/home/section1/img/seaIce_framePerYear_HD.1979-2048px-before (1).jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Площадь арктического морского льда достигла рекордно низкого уровня",
      dataAfter: "23 октября 2022 г.",
      description: "Площадь Северного Ледовитого океана, покрытая льдом, увеличивается зимой, а затем сокращается летом, обычно достигая самой низкой точки года в сентябре. Минимальный охват в 2012 году установил рекордно низкий уровень по крайней мере с 1979 года, когда начались первые надежные спутниковые измерения. Эти изображения сравнивают минимум 1984 года, который был примерно равен средней минимальной протяженности за 1979–2000 годы, с минимумом 2012 года, когда минимум был примерно вдвое меньше. Минимум 2013 года был больше, но продолжил долгосрочную тенденцию к снижению около 12 процентов потери морского льда за десятилетие с конца 1970-х годов, снижение, которое ускорилось после 2007 года. Минимум 2016 года был привязан ко второму самому низкому уровню за всю историю наблюдений. «При той скорости, которую мы наблюдаем, — сказал ученый НАСА Джои Комисо, — весьма вероятно, что летний морской лед Арктики полностью исчезнет в течение этого столетия»."
    },
    {
      imgBefore: "src/components/pages/home/section1/img/greenland_ali_2016167_2048x1536-80-after.jpg",
      imgAfter: "src/components/pages/home/section1/img/greenland_oli_2014161_2048x1536-80-before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Необычайно раннее таяние льда в Гренландии",
      dataAfter: "23 октября 2022 г.",
      description: "Талые ручьи, реки и озера образуются на поверхности Гренландского ледяного щита каждую весну или начало лета, но таяние началось исключительно рано в 2016 году. Таяние способствует дальнейшему таянию, когда образуются озера талой воды, поскольку они затемняют поверхность и поглощают больше солнечного света, чем лед. Поверхностное таяние способствует повышению уровня моря, когда вода стекает в океан и когда она течет через трещины к основанию ледника и временно ускоряет движение льда."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/spalte_oli_2020206_2048px-labeled_after.jpg",
      imgBefore: "src/components/pages/home/section1/img/spalte_tm5_1986228_2048px-labeled_before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Ледник Спальте в Гренландии распался",
      dataAfter: "23 октября 2022 г.",
      description: "Ледник Спальте (справа вверху) был ветвью огромного шельфового ледника на северо-востоке Гренландии под названием Ниогхальвфьордсбрае, также известного как 79 N (изображение 1986 года, слева). Но в конце июня 2020 года Спальте откололся от своего родителя и раскололся на многочисленные айсберги (изображение 2020 года, справа). Несмотря на потерю ледника площадью 44 квадратных мили (114 квадратных километров), 79 N остается крупнейшим шельфовым ледником Арктики, его длина составляет около 43 миль (70 километров), а ширина — 12 миль (20 километров). Но ученые говорят, что разломы, видимые к югу от того места, где был прикреплен Спальте, предвещают дальнейшую потерю. Подробнее читайте в NASA's Earth Observatory ."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/heilprin_and_tracy_glaciersheilprin_oli_2017273_2048x1536-after.jpg",
      imgBefore: "src/components/pages/home/section1/img/heilprin_and_tracy_glaciersheilprin_tm5_1987271_2048x1536-before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Ледники Трейси и Хейлприн в Гренландии тают",
      dataAfter: "23 октября 2022 г.",
      description: "Трейси (верхний) и Хейлприн (нижний) — два крупнейших ледника, которые стекают в Инглфилд-Бреднинг, фьорд на северо-западном побережье Гренландии. Они отступали с одинаковой скоростью в 1980-х и 1990-х годах, около 125 футов (38 метров) и 118 футов (36 метров) в год соответственно. Но между 2000 и 2014 годами скорость потери Трейси увеличилась до примерно 1194 футов (364 метров) в год, что более чем в три раза быстрее, чем 358 футов (109 метров) Хейлприна в год. Вероятной причиной разницы является то, что Трейси впадает в гораздо более глубокий канал морской воды, что делает его более уязвимым для таяния снизу по мере нагревания морской воды."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/heilprin_and_tracy_glaciersheilprin_tm5_1987271_2048x1536-before.jpg",
      imgBefore: "src/components/pages/home/section1/img/heilprin_and_tracy_glaciersheilprin_tm5_1987271_2048x1536-before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Ледники Трейси и Хейлприн в Гренландии тают",
      dataAfter: "23 октября 2022 г.",
      description: "Трейси (верхний) и Хейлприн (нижний) — два крупнейших ледника, которые стекают в Инглфилд-Бреднинг, фьорд на северо-западном побережье Гренландии. Они отступали с одинаковой скоростью в 1980-х и 1990-х годах, около 125 футов (38 метров) и 118 футов (36 метров) в год соответственно. Но между 2000 и 2014 годами скорость потери Трейси увеличилась до примерно 1194 футов (364 метров) в год, что более чем в три раза быстрее, чем 358 футов (109 метров) Хейлприна в год. Вероятной причиной разницы является то, что Трейси впадает в гораздо более глубокий канал морской воды, что делает его более уязвимым для таяния снизу по мере нагревания морской воды."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/tibet_2048px_1987.jpg",
      imgBefore: "src/components/pages/home/section1/img/tibet_2048px_2021.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Тающие ледники увеличивают озера на Тибетском плато",
      dataAfter: "23 октября 2022 г.",
      description: "Тибетское нагорье, где находятся десятки тысяч ледников, очень чувствительно к изменению климата. Вода от таяния ледников создала сотни новых озер и увеличила существующие, такие как главная пара, показанная здесь. Изображение 1987 года было сделано, когда Dorsoidong Co (слева) все еще был отделен от Chibzhang Co тонкой полосой земли. Большее количество взвешенного ила в Dorsoidong Co, вероятно, является причиной разницы в цвете. По мере того, как вода в двух озерах поднималась, она в конечном итоге покрыла барьер, объединив озера к моменту снимка 2021 года. Подробнее читайте в NASA's Earth Observatory ."
    },
    {
      imgAfter: "src/components/pages/home/section1/img/eastisland_oli_2018286_2048x1536-80-after.jpg",
      imgBefore: "src/components/pages/home/section1/img/eastisland_oli_2018254_2048x1536-80-before.jpg",
      dataBefore: "18 сентября 2021 г.",
      title: "Гавайский остров исчезает",
      dataAfter: "23 октября 2022 г.",
      description: "До урагана Валака в октябре 2018 года Северо-Западные Гавайские острова включали Восточный остров, показанный на сентябрьском снимке. Но шторм смыл большую часть 11 акров песка и гравия, которые составляли остров, оставив только два куска земли, видимых на октябрьском снимке. Восточный остров был частью Френч-Фригат-Шолс, атолла в морском национальном памятнике Папаханаумокуакеа. Подробнее читайте в NASA's Earth Observatory ."
    },
  ])
  const reactCompareSliderRef = useReactCompareSliderRef();
  React.useEffect(() => {
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
  }, []);

  let random =  getRandomInt(arr.length)
  let randomItem = arr[random]
  let randomBefore = arr[random].imgBefore
  let randomAfter = arr[random].imgAfter
  return <div style={{
    display: 'flex',
    flexGrow: 1,
    position: 'relative'
  }}>
    <ReactCompareSlider transition="0.25s cubic-bezier(.17,.67,.83,.67)" ref={reactCompareSliderRef} itemOne={<ReactCompareSliderImage src={randomAfter} alt="Image one" />} itemTwo={<ReactCompareSliderImage src={randomBefore} alt="Image two" style={{
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
  
};