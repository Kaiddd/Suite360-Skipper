/*
Suite360 skipper for depressed programmers who don't care about this stupid "mental health" shit (joke)

Made by Kaede

To use:
	- Start a lesson
	- Complete pre-test
	- Run the script in devconsole
	- When it gets stuck at the end, refresh
	- May have to click next two or three times to get to the post-test
	- Complete post-test (This can be easily cheated via a local override of the page, not making something to do this automatically on github though, find it yourself if you're really too dumb to answer these questions)
*/

function checkElements()
	{
		const nextBtn = document.getElementsByClassName("activity_nav_button_next")[0];
		if (nextBtn) {
			const cringeVideo = document.getElementsByClassName("activity_video")[0];
			if (cringeVideo) {
				cringeVideo.remove();
			}
			nextBtn.click();
		}
		setTimeout(checkElements,1);
	}
checkElements();
