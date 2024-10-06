import fire from "../images/fire.webp";
import climat from "../images/climat.webp";
import air from "../images/air.webp";
import forest from "../images/forest.webp";
import ocean from "../images/ocean.webp";

const globalIssues = [
  {
    title: "As for the impact of climate change on the environment",
    impact:
      "Climate change severely affects ecosystems worldwide. Rising global temperatures are melting glaciers and ice caps, leading to sea-level rise and more frequent extreme weather events like hurricanes, floods, and droughts. Many species face habitat loss as forests turn into deserts, coral reefs die due to ocean warming, and wildfires become more common. The increase in atmospheric carbon dioxide is also making oceans more acidic, which threatens marine life. Human societies face challenges in agriculture, water supply, and public health due to these environmental disruptions.",
    solution:
      "Для решения проблемы изменения климата необходимо сократить выбросы парниковых газов, перейти на возобновляемые источники энергии и внедрить более устойчивые методы сельского хозяйства.",
    image: climat, // Ссылка на изображение о влиянии изменения климата
  },
  {
    title: "Impact of Air Pollution on the Environment",
    impact:
      "Air pollution is a major environmental problem caused by the release of harmful substances into the atmosphere. Industrial emissions, vehicle exhaust, and burning fossil fuels contribute to the formation of smog, which damages human health and the ecosystem. It leads to respiratory problems, heart disease, and premature death in humans. For the environment, air pollution can cause acid rain, which harms soil, plants, and water bodies. It also contributes to global warming by increasing levels of greenhouse gases, further intensifying climate change impacts. Additionally, pollution reduces visibility and degrades natural landscapes.",
    solution:
      "Для снижения загрязнения воздуха можно использовать возобновляемые источники энергии, улучшить системы общественного транспорта и внедрить более строгие экологические нормы для промышленных предприятий.",
    image: air, // Ссылка на изображение о влиянии изменения климата
  },
  {
    title: "Impact of Deforestation on the Environment",
    impact:
      "Deforestation has severe consequences for the environment. It leads to the loss of biodiversity, as habitats for numerous species are destroyed, driving many to extinction. The removal of trees also causes soil degradation, as the forest floor loses its protective cover, leading to erosion and the loss of nutrients. Additionally, deforestation disrupts the water cycle, reducing rainfall and drying out rivers and lakes. The cut trees, which act as carbon sinks, no longer absorb carbon dioxide, contributing to higher concentrations of greenhouse gases in the atmosphere and exacerbating global warming.",
    solution:
      "Восстановление ле`сов, более устойчивое управление лесными ресурсами и защита экосистем могут помочь предотвратить дальнейшее обезлесение.",
    image: forest, // Ссылка на изображение о влиянии изменения климата
  },
  {
    title: "Impact of Ocean Pollution on the Environment",
    impact:
      "Ocean pollution, especially from plastics and chemicals, has devastating effects. Marine life such as sea turtles, fish, and seabirds often become entangled in plastic waste or mistake it for food, leading to injury or death. Coral reefs, crucial ecosystems for many marine species, are being destroyed by chemical pollutants and microplastics, which cause coral bleaching and hinder recovery. Additionally, toxic chemicals and plastic particles enter the food chain, contaminating seafood consumed by both animals and humans. Ocean pollution also contributes to the degradation of water quality, which impacts marine biodiversity and ecosystem health.",
    solution:
      "Решение включает сокращение использования пластика, улучшение систем переработки отходов и очистку океанов от уже накопленных загрязнителей.",
    image: ocean, // Ссылка на изображение о влиянии изменения климата
  },
  {
    title: "Impact of Drought on the Environment",
    impact:
      "Droughts lead to severe water shortages, which negatively affect both ecosystems and human communities. Agriculture suffers as crops fail and livestock struggle, leading to food insecurity. Rivers, lakes, and reservoirs shrink, impacting wildlife that depends on these water sources. Soil degradation occurs as the land becomes dry and more vulnerable to erosion. Droughts also increase the risk of wildfires due to dry vegetation, which can quickly spread and cause widespread damage to forests and habitats. Additionally, prolonged drought can disrupt local climates and biodiversity, making it harder for species to survive in arid conditions.",
    solution:
      "Для борьбы с засухой нужно улучшать управление водными ресурсами, внедрять методы сохранения воды в сельском хозяйстве и строить системы устойчивого водоснабжения.",
    image: fire, // Ссылка на изображение о влиянии изменения климата
  },
];

export default globalIssues;
