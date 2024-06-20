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
			const response = await axios.get('/api/prototype/patients', {
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
			const response = await axios.get('/api/v1/condition', {
				headers: {
					Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTg4NTA1MDYuNTQ1NzY5LCJleHAiOjE3MTg4NTQxMDYsImlzcyI6IkludGVyU3lzdGVtcyIsInN1YiI6IlNhdHVzZWhhdCIsInNpZCI6Im9aUzAxVmRPZ2pPQUJuTVFxWis2WERjQyIsImFwcCI6Ii9hcGkvdjEvIn0.O2QKkQVrL1nMGo0HrG-m-NOy6r8hviEURZ0jo1APgTSBdjbU8TDp9wtfPH1GVOA19FbV0kTPsM3OKM1CI04nL_jd7xhqRrE7J5rrn2nAsErVS35jkt77ZINOspU0F50HsHJUuc3kwOQpJEQV6_EkyrQ2s12tYFJGvvSX6gFDrxyFEqhtCwA5IK1C191nJjf41kP_SFVroDH219tIxgKZD-W9rhgT5BkxaPljedn3WNgdIXviwK3BtzRoe3DizZjU2906YPEArvRxd75Eaxvdqen46JDLJ8Kv_GHd3rgLWVsMqm97tyQYcCh04ZH-JiZBkPUjAEMLYFVCIFIpXL2sCw`
				}
			});

			console.log(response.data);
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
