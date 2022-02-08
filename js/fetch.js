let timer;

function changeHandler(countryName) {
    const mainDiv = document.getElementById('countries_container')
    mainDiv.innerHTML = ''
    let result = ''
    clearTimeout(timer);
    timer = setTimeout(function () {

        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(data => data.json())
            .then(countries => {
                const allIds = []
                const latlangs = []
                countries.forEach((country,index) => {
                    const {
                        name,
                        flags,
                        currencies,
                        idd,
                        capital,
                        latlng,
                        borders,
                        area,
                        population,
                        car,
                        timezones,
                        continents,
                        coatOfArms,
                        startOfWeek
                    } = country
                    const allCurrencies = Object.keys(currencies)
                    allIds.push(`googleMap${index}`)
                    latlangs.push(latlng)
                    result += `<div class="country-info">
                               <div class="header">
                                   <div class="flag">
                                        <img src=${flags.svg || flags.png || 'assets/noimage.jpg'} alt="">
                                    </div>
                                   <div class="country-name">
                                       <p>${name.official || '-'}</p>
                                   </div>
                               </div>
                               <div class="general-info">
                                   <div class="general-info-data">
                                       <div class="land-info">
                                           <h5 class="info">Land Area</h5>
                                           <img src="../assets/area.png" alt="">
                                           <span class="light">${area?.toLocaleString() || '-'} sq km</span>
                                       </div>
                                       <div class="population-info">
                                           <h5 class="info">Population</h5>
                                           <img src="../assets/people.png" alt="">
                                           <span class="light">${population?.toLocaleString() || '-'}</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="map-container" id=googleMap${index}></div>
                               <div class="other-info">
                                   <div class="left-info-container">
                                       <span class="label">Capital</span>
                                       <span class="value">${capital || '-'}</span>
                                       <span class="label">Currencie</span>
                                       <span class="value">${currencies[allCurrencies[0]]['name'] || '-'}</span>
                                       <span class="label">Currencie symbol</span>
                                       <span class="value">${currencies[allCurrencies[0]]['symbol'] || '-'}</span>
                                       <span class="label">Timezones</span>
                                       <span class="value">${(timezones && timezones[0]) || '-'}</span>
                                       <span class="label">Borders</span>
                                       <span class="value">${(borders.length >= 4 && borders.slice(0, 4)) || borders[0] || '-'}</span>
                                   </div>
                                   <div class="right-info-container">
                                       <span class="label">Car sign</span>
                                       <span class="value">${car?.signs || '-'}</span>
                                       <span class="label">Continents</span>
                                       <span class="value">${continents || '-'}</span>
                                       <span class="label">Start Of Week</span>
                                       <span class="value">${startOfWeek || '-'}</span>
                                       <span class="label">IDD</span>
                                       <span class="value">${idd?.root || '-'} ${idd?.suffixes || '-'}</span>
                                       <span class="label">coatOfArms</span>
                                       <img src=${coatOfArms?.svg || coatOfArms?.png || "assets/coat.svg"} alt="" class="coat">
                                   </div>
                               </div>
                           </div>`
                })

                return {allIds,latlangs}
            }).catch(err => {
            console.log(err)
            result = '<p class="red">no country found</p>'
        }).then(newParamsObject => {
            mainDiv.innerHTML = result
            window.gmapsInitialize = myMap.bind(null, newParamsObject);
            let script = document.createElement('script');
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCw4X71vls7i4k_nxhFdMusp_wpiVBCskE&callback=gmapsInitialize";
            script.async = true;
            document.body.appendChild(script);

        }).catch(err => console.log(err))

    }, 1000)
}





