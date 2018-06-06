document.addEventListener("DOMContentLoaded", () => {
  const basic = document.getElementById('basic-plan');
  const pro = document.getElementById('pro-plan');
  const premium = document.getElementById('premium-plan');

  basic.addEventListener('mouseover', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "50px";
    userStats.style.backgroundColor = "RGB(58,147,278)";

  });
  basic.addEventListener('mouseout', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "";
    userStats.style.backgroundColor = "";
  });
});
