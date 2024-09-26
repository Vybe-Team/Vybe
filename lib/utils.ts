export function getRelativeTime (timestamp: string): string {
    const now = new Date();
    const postDate = new Date(timestamp);
    const secondsAgo = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;
    const daysAgo = Math.floor(hoursAgo / 24);
    
    if (daysAgo < 7) return `${daysAgo} days ago`;

    // Format for older posts: "DD MMM" or "DD MMM YYYY"
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: now.getFullYear() === postDate.getFullYear() ? undefined : 'numeric',
    };

    return postDate.toLocaleDateString(undefined, options);
};


export function getReadableTimestamp (timestamp: string): string {
    const postDate = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };

  const time = postDate.toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true });
  const date = postDate.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });

  return `${time} · ${date}`;
};