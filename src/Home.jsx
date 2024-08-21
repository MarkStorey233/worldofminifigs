import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const location = useLocation();
	const mapData = [
		{
			file: '24221-tavern-table-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1Y1UyUK6z2ShCZ9Rv473cCNJvI_BqOrBB/view?usp=drive_link',
		},
		{
			file: '24221-tavern-table-instructions-b.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1nmnRi9Y6TMSj4bTjsKP3NyRGFgpovQov/view?usp=drive_link',
		},
		{
			file: '24222-tavern-bar-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1SEkCOOwUS2fh52hgoXOQIlciAVs6oyOS/view?usp=drive_link',
		},
		{
			file: '24222-tavern-bar-instructions-b.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1hv2ivaWX9RXwH0-XC0BsLSp6Ds37SiT4/view?usp=drive_link',
		},
		{
			file: '24228a-tavern-booth-a-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1hxwQlh4Kmj-Au6UOT8FmHNE5TEqeVDD_/view?usp=drive_link',
		},
		{
			file: '24228b-tavern-booth-b-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1hPrEGxvkdYx7uMo9-UVG6mQDVsIXqY2T/view?usp=drive_link',
		},
		{
			file: '24228c-tavern-booth-c-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1ETOU4SDvcfn-jHVnnsqn_Jh9W95cFxam/view?usp=drive_link',
		},
		{
			file: '24222-bookshelf-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1O9hLAE8OaMLRI4ueIoKYK5ysAuOTlwpk/view?usp=drive_link',
		},
		{
			file: 'troop-carrier-instructions.pdf',
			redirectLink:
				'https://drive.google.com/open?id=1b1lnHL2RJ_g_RXSgxH9XvODg4VOp7cmf&usp=drive_copy',
		},
		{
			file: '24523-gelatinous-cube-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1IkmDWZnL8hhUp2n6mXLWupSqOT98cCdP/view?usp=drive_link',
		},
		{
			file: 'lukes-lightsaber-instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/1Hsc-3fPK8M1KKZpR8FSJdWEaZnZXYeSV/view?usp=drive_link',
		},
		{
			file: 'Mimic-V2-Brown-Instructions.pdf',
			redirectLink:
				'https://drive.google.com/file/d/19JQG5100QPKNHJfzRWpnv27ll_j3Bo-w/view?usp=drive_link',
		},
	];
	useEffect(() => {
		const pathname = location.pathname;
		const filename = pathname.substring(pathname.lastIndexOf('/') + 1);

		// console.log(pathname, filename);

		mapData.map((item) => {
			if (item.file === filename) {
				console.log(item.redirectLink);
				window.location.href = item.redirectLink;
			}
		});
	}, [location]);

	return (
		<div>
			<p>Redirecting...</p>;
		</div>
	);
};

export default Home;
