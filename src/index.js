import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter (Senator => Senator.party === "Republican")
}

export const democrats = () => {
  return Senators.filter ( Senator => Senator.party === "Democrat") 
}

export const independents = () => {
  return Senators.filter ( Senator => Senator.party === "Independent")
}

export const males = () => {
  return Senators.filter ( Senator => Senator.person.gender === "male")
}

export const females = () => {
  return Senators.filter ( Senator => Senator.person.gender === "female" )
}

export const byState = (state = 'UT') => {
  return Senators.filter ( Senator => Senator.state === state)
}

export const mapping = () => {
  return Senators.map (senator=> {
    const senatorObj = {
      firstName: senator.person.firstname,
      lastName: senator.person.lastname,
      party: senator.party,
      gender: senator.person.gender
    }
    return senatorObj;
  });
   
}

export const reducedCount = () => {
  return Senators.reduce((add, senator)=> {
    if ( senator.party === 'Republican') add.republican++;
    else if (senator.party === 'Democrat') add.democrat++;
    else add.independent ++;
    return add;
  }, {republican: 0, democrat: 0, independent: 0,});
}


const REPLACE_ME_WITH_CODE = false
