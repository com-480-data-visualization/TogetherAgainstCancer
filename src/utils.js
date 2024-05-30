import cancerData from "./data/data.json";

export function updateCountryInfo(setter, cancer, country, latlng) {
  const countryInfo = cancerData.countryMeans[country.trim().toUpperCase()] === undefined ? null : cancerData.countryMeans[country.trim().toUpperCase()][cancer.type.toLowerCase()];
  setter({
    name: country,
    deathRateMen: countryInfo === null ? null : (countryInfo.death_rate_men === null ? null : countryInfo.death_rate_men),
    deathRateWomen: countryInfo === null ? null : countryInfo.death_rate_women,
    latlng: latlng
  })
}