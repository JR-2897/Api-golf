const mongoose = require('mongoose');
const app = express();
const config=require('../configs/db.config');
const port = 3046;

mongoose.connect('mongodb://admin:G36CJfcTA5g6@ds217799.mlab.com:17799/api-golf', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
});

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})
