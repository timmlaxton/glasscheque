const products = [
	{
		brand: 'Beaver Town ',
		name: 'Gamma-Ray',
		image: '/images/Gamma.jpg',
		category: 'beer',
		blurb: 'Founded in 2011 by Logan Plant in the basement of a pub, the brewery has grown up ...',
		alcoholvol: '5.4%',
		alcoholcon: '1.7',
		description:
			'Founded in 2011 by Logan Plant in the basement of a pub the brewery has grown up and become one of the flagship London breweries around. Taking its name from the old cockney name for the Victorian part of London De Beauvoir they quickly out grew the basement of Dukes Brew and Que relocated to Hackney Wick. After a short time there they realised they needed to grow again and made a final move over to Tottenham Hale in North London. There they have perfected brews such as Gamma Ray and gained a loyal fan base for their modern and forward thinking beers.',
		price: 2.81,
		countInStock: 100,
		rating: 4.1,
		numReviews: 50
	},
	{
		brand: 'Brixton Brewery ',
		name: 'Cold Harbour Lager',
		image: '/images/BrixtonCold.jpg',
		category: 'beer',
		blurb: 'Back in the day, travellers to London found shelter on Brixton’s Coldharbour Lane...',
		alcoholvol: '4.4%',
		description:
			'Back in the day, travellers to London found shelter on Brixton’s Coldharbour Lane. These days it’s a free-spirited, anything goes kind of street, inspiring this pilsner-style beer. Coldharbour is full of fearless craft character',
		price: 2.49,
		countInStock: 100,
		rating: 4.3,
		numReviews: 10
	},
	{
		brand: 'Black Isle ',
		name: 'GoldFinch IPA',
		image: '/images/BlackIsleGold.jpg',
		category: 'beer',
		blurb: 'A classic porter with dark ...',
		description:
			'Light and refreshingly hoppy, Black Isle Goldfinch is bursting with a citrusy zing. Peach, tangerine and pine aromas are met with tropical fruits on the palate. At only 3.5%, it’s enough to make you want to sing!',
		price: 2.66,
		countInStock: 100,
		rating: 4.6,
		numReviews: 22
	},
	{
		brand: 'Black Isle',
		name: 'Porter',
		image: '/images/BlackIslePorter.jpg',
		category: 'beer',
		blurb: 'A classic porter with dark ...',
		description:
			'A classic porter with dark roasted chocolate malts producing a dry, velvety and full-bodied ruby black beer with notes of treacle and coffee. Best paired with a comfy chair, your favourite slippers and a roaring fire for a cosy night in.',
		price: 2.69,
		countInStock: 100,
		rating: 4.5,
		numReviews: 22
	},
	{
		brand: 'The Botanist ',
		name: 'The Botanist ',
		image: '/images/bot.jpg',
		category: 'gin',
		description:
			'The Botanist is the first and only Islay dry gin. It is a small-batch, artisanal gin made by the Bruichladdich distillery, with 22 herbs and flowers foraged from the windswept hills, peat bogs and shores of Islay.',
		price: 34.99,
		countInStock: 100,
		rating: 4.1,
		numReviews: 50
	},
	{
		brand: 'Aviation  ',
		name: 'Aviation  ',
		image: '/images/aviation.jpg',
		category: 'gin',
		description:
			'Not all gins can be virtuous. Sure, there are plenty in the world that are self-sacrificing, destined to save the world, get the girl and generally refresh everyone with a predictable blend of well-balanced botanicals, but thats not for us.',
		price: 37.5,
		countInStock: 100,
		rating: 4.3,
		numReviews: 10
	},
	{
		brand: 'No.3 London Dry  ',
		name: 'No.3 London Dry  ',
		image: '/images/london.jpg',
		category: 'gin',
		description:
			'By all accounts 1 in a lonely number, 2 can be as bad as 1 but number 3? No. 3 is magic. Developed at the world-renowned wine and spirit merchant Berry Bros. & Rudd, an establishment with such history, intrigue and charm it would surely not feel out of place in Diagon Alley, No.3 London Dry Gin is rather enchanting.',
		price: 36.99,
		countInStock: 100,
		rating: 4.6,
		numReviews: 22
	},
	{
		brand: 'Silent Pool',
		name: 'Silent Pool',
		image: '/images/pool.jpg',
		category: 'gin',
		description:
			'Silent Pool Gin, with its combination of 24 specially chosen botanicals, is rich, fresh and juniper-driven with floral layers such as lavender and chamomile. Fresh notes of citrus and kaffir lime are grounded by earthy and spicy cassia bark and cubeb whilst the subtle sweetness of local honey helps to achieve a smooth finish.',
		price: 39.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 22
	},
	{
		brand: 'Talisker',
		name: 'Talisker',
		image: '/images/whiskey/Caol.jpg',
		category: 'whiskey',
		description:
			'The only malt from the Isle of Skye and a real classic, this is perfect to sit and savour at the end of the day. Peaty and smoky but not too peppery, its a smooth malt, with a comforting afterglow..',
		price: 43.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 10
	},
	{
		brand: 'Balvennie',
		name: 'Balvennie',
		image: '/images/whiskey/Caol.jpg',
		category: 'whiskey',
		description: 'The Balvenie distillery is located in Dufftown on Speyside, in Scotland..',
		price: 48.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 26
	},
	{
		brand: 'Glenfiddich',
		name: 'Glenfiddich',
		image: '/images/whiskey/Caol.jpg',
		category: 'whiskey',
		description:
			'Although it is easy to dismiss the big names, without them the whisky industry wouldnt be what it is Glenfiddichs reputation is known across the world, and deservedly so. This whisky is matured in bourbon and sherry casks for at least 12 years, before being mellowed in an oak marrying tun. The result is a creamy, approachable malt packed with butterscotch and soft oak, but held together by a seam of refreshing, crisp pear.',
		price: 37.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 12
	},
	{
		brand: 'Laphroaig',
		name: 'Laphroaig',
		image: '/images/whiskey/Caol.jpg',
		category: 'whiskey',
		description:
			'Pronounced "La-froyg", this pungent malt punches you in the nose with earthy peat smoke, fresh seaweed and nutty barley. The assault continues with a wallop of salty peat right in the mouth. It isnt all aggressive though as theres a beautiful mellow sweetness in there too. For a long time a little group of committed islanders have worked here to make what is thought to be the most particular single malt on the planet. Obviously after some time the general population change, yet our conventional techniques, the antiquated abilities and outright commitment to quality dependably remains.',
		price: 42.0,
		countInStock: 100,
		rating: 4.5,
		numReviews: 18
	}
];

export default products;
