document.addEventListener("DOMContentLoaded", () => {
  const basic = document.getElementById('basic-plan');
  const pro = document.getElementById('pro-plan');
  const premium = document.getElementById('premium-plan');

  basic.addEventListener('mouseover', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "5%";
    userStats.style.backgroundColor = "RGB(143,206,234)";
    gigStats.style.width = "5%";
    gigStats.style.backgroundColor = "RGB(143,206,234)";
    projectStats.style.width = "5%";
    projectStats.style.backgroundColor = "RGB(143,206,234)";

  });
  basic.addEventListener('mouseout', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "";
    userStats.style.backgroundColor = "";
    gigStats.style.width = "";
    gigStats.style.backgroundColor = "";
    projectStats.style.width = "";
    projectStats.style.backgroundColor = "";
  });

  pro.addEventListener('mouseover', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "30%";
    userStats.style.backgroundColor = "RGB(143,206,234)";
    gigStats.style.width = "70%";
    gigStats.style.backgroundColor = "RGB(143,206,234)";
    projectStats.style.width = "30%";
    projectStats.style.backgroundColor = "RGB(143,206,234)";
  });

  pro.addEventListener('mouseout', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "";
    userStats.style.backgroundColor = "";
    gigStats.style.width = "";
    gigStats.style.backgroundColor = "";
    projectStats.style.width = "";
    projectStats.style.backgroundColor = "";
  });

  premium.addEventListener('mouseover', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "100%";
    userStats.style.backgroundColor = "RGB(143,206,234)";
    userStats.style.borderRadius = "20px";
    gigStats.style.width = "100%";
    gigStats.style.backgroundColor = "RGB(143,206,234)";
    gigStats.style.borderRadius = "20px";
    projectStats.style.width = "100%";
    projectStats.style.backgroundColor = "RGB(143,206,234)";
    projectStats.style.borderRadius = "20px";
  });

  premium.addEventListener('mouseout', () => {
    const userStats = document.getElementById('user-stats');
    const gigStats = document.getElementById('gigs-stats');
    const projectStats = document.getElementById('projects-stats');
    userStats.style.width = "";
    userStats.style.backgroundColor = "";
    userStats.style.borderRadius = "";
    gigStats.style.width = "";
    gigStats.style.backgroundColor = "";
    gigStats.style.borderRadius = "";
    projectStats.style.width = "";
    projectStats.style.backgroundColor = "";
    projectStats.style.borderRadius = "";
  });
});
