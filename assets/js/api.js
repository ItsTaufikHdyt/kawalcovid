const caseHeading_div = document.querySelector(".case__heading--title");
const confirmed_h2 = document.querySelector(".case__card--confirmed h2");
const treatment_h2 = document.querySelector(".case__card--treatment h2");
const recover_h2 = document.querySelector(".case__card--recover h2");
const died_h2 = document.querySelector(".case__card--died h2");

const getCoronaApi = async () => {
    const response = await fetch("https://kawalcovid19.harippe.id/api/summary");
    const data = await response.json();
  
    return data;
};

const UpdateUI = (data) => {
    const { confirmed, treatment, recover, died } = data;
  
    confirmed_h2.textContent = confirmed;
    treatment_h2.textContent = treatment;
    recover_h2.textContent = recover;
    died_h2.textContent = died;
  };

  const getDataCorona = (data) => {
    const confirmed = data.confirmed.value;
    const treatment = data.activeCare.value;
    const recover = data.recovered.value;
    const died = data.deaths.value;
  
    return { confirmed, treatment, recover, died };
  };

  getCoronaApi()
  .then((data) => getDataCorona(data))
  .then((data) => UpdateUI(data))
  .catch((err) => console.log(err));