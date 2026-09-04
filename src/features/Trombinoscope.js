import { applyTheme } from './theme.js'

const response = await fetch('/team.json')
const team = await response.json()
const grid = document.getElementById("teamGrid");

applyTheme()

function MemberCard(member){
	const card = document.createElement("div")
	card.className = "card bg-base-200 shadow-sm"

	card.innerHTML = `
		<div class="card-body items-center text-center">
			<div class="avatar">
				<div class="w-24 rounded-full">
					<img src="${member.avatar}" alt="${member.name}" />
				</div>
			</div>
				<h2 class="card-title">${member.name}</h2>
				<span class="badge badge-primary">${member.role}</span>
				<p>${member.bio}</p>
				<div class="flex flex-wrap gap-1 justify-center">
					${member.skills.map(skill => `<span class="badge badge-outline">${skill}</span>`).join("")}
				</div>
				<p>${member.experience} · ${member.location}</p>
				<div class="card-actions">
					<button class="btn btn-primary btn-sm">Contact</button>
					<button class="btn btn-outline btn-sm">Profil</button>
				</div>
			</div>
		</div>
	`
	return card
}

team.forEach(member=>{
	grid.appendChild(MemberCard(member))
})