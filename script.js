let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    ihtml = " "

    for(item in contest){
        console.log(contest[item])
        ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="https://i.pinimg.com/originals/6d/ca/fb/6dcafb8fcaf60c99b0f699e272725dac.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5>Contest name: ${contest[item].name}</h5>
              <p>Start date: ${contest[item].start_time}</p>
              <p>End date: ${contest[item].end_time}</p>
              <a href="${contest[item].url}" class="btn btn-primary">Visit Page</a>
            </div>
          </div>

        `
    }
    cardContainer.innerHTML = ihtml

})

cardContainer.innerHTML = "allcards"