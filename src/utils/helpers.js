// Borrowed from gaearon/Gatsby Blog Starter

export function formatPostDate(date) {
	if (typeof Date.prototype.toLocaleDateString !== 'function') {
		return date;
	}

	date = new Date(date);
	const args = [
		'en-US',
		{
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		},
	].filter(Boolean);
	return date.toLocaleDateString(...args);
}