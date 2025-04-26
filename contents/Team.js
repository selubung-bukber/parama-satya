export function Team() {
	const teamMembers = [
	  {
		 name: 'Igor Protopsky',
		 role: 'Director',
		 image: 'images/team-1.jpg',
		 delay: '0.2s',
	  },
	  {
		 name: 'Alexander Muraviev',
		 role: 'Manager',
		 image: 'images/team-2.jpg',
		 delay: '0.3s',
	  },
	  {
		 name: 'Sergey Delfinov',
		 role: 'Finisher',
		 image: 'images/team-3.jpg',
		 delay: '0.4s',
	  },
	];
 
	const renderedTeam = teamMembers
	  .map(
		 (member) => `
		 <div class="team-item wow fadeInUp" data-wow-delay="${member.delay}">
			<div class="team-thumb">
			  <img src="${member.image}" alt="${member.name}">
			</div>
			<div class="team-body">
			  <div class="team-profi">${member.role}</div>
			  <div class="team-name">${member.name}</div>
			</div>
		 </div>
	  `
	  )
	  .join('');
 
	const content =`
	  <div class="container">
		 <h2 class="center-title wow fadeIn" data-wow-delay="0.1s">Our team</h2>
		 <div class="team-row">
			${renderedTeam}
		 </div>
	  </div>
	`;

	const events = [
	 
	];
	return { content, events };
 }
 