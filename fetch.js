fetch('https://restcountries.com/v3.1/name/Armenia').then(data => data.json()).then(countries => {
    const [armenia] = countries
    console.log(armenia)
    const rootDiv = document.querySelector('main')
    rootDiv.append(drawCountryDiv(armenia))
 })


function drawCountryDiv(countryInfo){
    const containerDiv = document.createElement('section')
    containerDiv.setAttribute('class','country')

    const rowDivOfName = document.createElement('div')
    rowDivOfName.setAttribute('class', 'row')
    const nameTitleSpan = document.createElement('span')
    const nameContentSpan = document.createElement('span')
    nameTitleSpan.textContent='Name'
    nameContentSpan.textContent = countryInfo.name.common
    rowDivOfName.append(nameTitleSpan, nameContentSpan)

    const rowDivOfCapital = document.createElement('div')
    rowDivOfCapital.setAttribute('class', 'row')
    const capitalTitleSpan = document.createElement('span')
    const capitalContentSpan = document.createElement('span')
    capitalTitleSpan.textContent='Capital'
    capitalContentSpan.textContent = countryInfo.capital
    rowDivOfCapital.append(capitalTitleSpan, capitalContentSpan)


    const rowDivOfLanguage = document.createElement('div')
    rowDivOfLanguage.setAttribute('class','row')
    const languageTitleSpan = document.createElement('span')
    const languageContentSpan = document.createElement('span')
    languageTitleSpan.textContent='Language'
    languageContentSpan.textContent = countryInfo.languages.hye
    rowDivOfLanguage.append(languageTitleSpan, languageContentSpan)

    const rowDivOfTimezone = document.createElement('div')
    rowDivOfTimezone.setAttribute('class','row')
    const TimezoneTitleSpan = document.createElement('span')
    const TimezoneContentSpan = document.createElement('span')
    TimezoneTitleSpan.textContent='Timezone'
    TimezoneContentSpan.textContent = countryInfo.timezones
    rowDivOfTimezone.append(TimezoneTitleSpan, TimezoneContentSpan)

    const rowDivOfPopulation = document.createElement('div')
    rowDivOfPopulation.setAttribute('class','row')
    const populationTitleSpan = document.createElement('span')
    const populationContentSpan = document.createElement('span')
    populationTitleSpan.textContent='Population'
    populationContentSpan.textContent = countryInfo.population
    rowDivOfPopulation.append(populationTitleSpan, populationContentSpan)

    const rowDivOfFlag = document.createElement('div')
    rowDivOfFlag.setAttribute('class','row')
    const flagImag = document.createElement('img')
    flagImag.setAttribute('src', countryInfo.flags.png)
    rowDivOfFlag.append(flagImag)


    containerDiv.append(rowDivOfName, rowDivOfCapital, rowDivOfLanguage, rowDivOfTimezone, rowDivOfPopulation, rowDivOfFlag)
    return containerDiv
}








