function solve(arr){
    let [initialFlights, changedStatuses, flightStatus ] = arr;
    flightStatus = flightStatus[0];

    let flights = {};

    //fill the object with initial flights
    for (let inputLine of initialFlights){
        let [sector, destination] = inputLine.split(" ");

         if (!flights.hasOwnProperty(sector)){
            flights[sector] = {Destination: destination, Status: "Ready to fly"};
         }
    }

    //change the statuses of the given sectors (with "Cancelled");
    for (let inputLine of changedStatuses){
        let [sector, changedStatus] = inputLine.split(" ");

        if (flights.hasOwnProperty(sector)){
            flights[sector].Status = changedStatus;
        }
    }

    let allFlights = Object.values(flights).filter((f) => f.Status === flightStatus).forEach((el) => console.log(el));

}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']]);