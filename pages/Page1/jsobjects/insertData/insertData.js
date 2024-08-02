export default {
insertData: async () => {
 	const movie = await addMovie.run();
 	closeModal(addMovieModal.name);
 	showAlert('Movie Created', 'success');
 	getMovies.run();
 }
}