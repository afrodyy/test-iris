<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	let username = 'hi';
	let password = 'pqow1346';
	let token;
	let patients = [];

	const handleAuth = (username, password) => {
		token = btoa(username + ':' + password);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:52773/api/prototype/patients', {
				headers: {
					Authorization: `Basic ${token}`
				}
			});

			patients = response.data;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handleTest = async () => {
		try {
			const response = await axios.get('https://dev-hub.zicare.id/api/v1/condition', {
				headers: {
					Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTg3OTE1MzAuNDYxNTc5LCJleHAiOjE3MTg3OTUxMzAsImlzcyI6IkludGVyU3lzdGVtcyIsInN1YiI6IlNhdHVzZWhhdCIsInNpZCI6ImRmMUplYTF4K1htL3FMUFQ0TWpNYitPbiIsImFwcCI6Ii9hcGkvdjEvIn0.wE8n8cQM9rk4LR_KSoU9lWTkWdwcKsb53qLHXILOZLvWUvA4jBhoZ7UvcuSQDuyUDZTkV00gZAsyDhqeGnPiANFTMYcD6LoHXYedjsIuuVMS7sSUTGrIZvXV41fw0JLRoHy862CeUnKpPAq8o-bgkYXUrm8uzmK-5vjA1Yww0gQvasWg6w06DNlobi6LRlxxLBOG16-nbfoPdTkW-Y__KLFWbJmGFa1-NGfRaqS89W99DE_2Qozn92hoIsV-NSvjV6RCi3rVcZBvKdPTzkWEmUH6SrZg1FdFuv0sscDD0ZTQjeI_9VQ1Vi34zzDCwWMbgwdoP1QuK5u8_qI3syPs4Q`
				}
			});

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	onMount(() => {
		handleAuth(username, password);
		fetchData();
	});
</script>

<!-- Row -->
<div class="flex flex-wrap -mx-2">
	<!-- Column 1 -->
	<div class="w-full px-2 mt-10">
		<div class="bg-gray-100 p-4 rounded shadow">
			<button type="button" on:click={handleTest} class="px-2 py-1 rounded bg-red-500 text-white"
				>Test</button
			>
			<h2 class="text-2xl font-bold text-gray-700 mb-5">Data Pasien</h2>

			<table class="w-full">
				<thead>
					<tr>
						<th class="border px-4 py-2 text-gray-700 text-left">#</th>
						<!-- <th class="border px-4 py-2 text-gray-700 text-left">ID</th> -->
						<th class="border px-4 py-2 text-gray-700 text-left">Name</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Title</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Gender</th>
						<th class="border px-4 py-2 text-gray-700 text-left">DOB</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Ordered By</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Date of Order</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Date of Report</th>
						<th class="border px-4 py-2 text-gray-700 text-left">Ethnicity</th>
						<th class="border px-4 py-2 text-gray-700 text-left">HN</th>
					</tr>
				</thead>
				<tbody>
					{#each patients as patient, index}
						{#if index < 6}
							<tr class="hover:bg-gray-200">
								<th class="border px-4 py-2 text-gray-700 font-semibold text-left">{index + 1}.</th>
								<!-- <td class="border px-4 py-2 text-gray-700 font-semibold">{patient.ID}</td> -->
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.DOB}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.DateOfOrder}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.DateOfReport}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.Ethnicity}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.Gender}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.HN}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.Name}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.OrderedBy}</td>
								<td class="border px-4 py-2 text-gray-700 font-semibold">{patient.Title}</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
