const AWS = require('aws-sdk');
var request = require('request');

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
});

var s3 = new AWS.S3();

function put_from_url(url, bucket, key, callback) {
    console.log('####### 1');
    request({
        url: url,
        encoding: null
    }, function(err, res, body) {
        if (err)
            return callback(err, res);
        s3.putObject({
            Bucket: bucket,
            Key: key,
            ContentType: res.headers['content-type'],
            ContentLength: res.headers['content-length'],
            Body: body // buffer
        }, callback);
    });
}

const response = (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`Succes: ${JSON.stringify(data)}`);
    }
};

const rekognition = new AWS.Rekognition();
// const collection = rekognition.createCollection({
//     CollectionId: 'box-app-faces'
// }, (err, data) => {
//     if (err) {
//         console.log(`Error: ${err}`);
//     } else {
//         console.log(`Succes: ${JSON.stringify(data)}`);
//     }
// });

var faces = {
    "af57ce2f-79ee-4428-b7f0-f78338ae6a30": 'Dmytro Kiselov',
    "6f62d9bc-32be-4808-b906-a69fb4777fe": 'Skipp',
    "2319bdf7-45a9-448a-a490-7cec646e82cd": 'Victoria'
};

// rekognition.indexFaces({
//     CollectionId: 'box-app-faces',
//     Image: {
//         S3Object: {
//             Bucket: 'box-app-faces', Name: 'skipp 3.jpg'
//         }
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(`Error: ${err}`);
//     } else {
//         console.log(`Succes: ${JSON.stringify(data)}`);
//     }
// });

// rekognition.searchFacesByImage({
//     CollectionId: 'box-app-faces',
//     Image: {
//         S3Object: {
//             Bucket: 'box-app-faces', Name: 'skipp 2.jpg'
//         }
//     }
// }, (err, data) => {
//     if (!err) {
//         // console.log(data);
//         // console.log(data.FaceMatches[0].Face);
//         data.FaceMatches.forEach((face) => {
//             console.log(face.Face.FaceId);
//         });
//     }
// });

// rekognition.compareFaces({  
//     SourceImage: {
//         S3Object: {
//             Bucket: 'box-app-faces', Name: 'skipp-williamson.png'
//         }
//     },
//     TargetImage: {
//         S3Object: {
//             Bucket: 'box-app-image', Name: '(posted) 2018.03.023 Skipp and Victoria on the ferry to Waiheke.jpg'
//         }
//     }
// }, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else {
//         console.log(data);
//         // console.log(data.FaceMatches[0].Face);
//         data.FaceMatches.forEach((face) => {
//             console.log(face.Face);
//         });
//     }
// });

// rekognition.detectFaces({
//     Image: {
//         S3Object: {
//             Bucket: 'box-app-faces', Name: 'skippp.jpg'
//         }
//     }
// }, (err, data) => {
//     if (!err) {
//         // console.log(data);
//         console.log(data);
//     }
// });


// rekognition.listFaces({
//     CollectionId: 'box-app-faces'
// }, (err, data) => {
//     if (!err) {
//         // console.log(data);
//         console.log(data);
//     }
// });

// const process = async () => {
//     // const collection = await rekognition.createCollection('box-app-faces');
//     // console.log(collection);
//     const faces = await rekognition.listFaces('box-app-faces');
//     console.log(faces.response.data);
//     // const imageFaces = await rekognition.detectFaces({
//     //     Image: {
//     //         S3Object: {
//     //             Bucket: 'box-app-faces', Name: 'alan1.jpg'
//     //         }
//     //     },
//     //     Attributes: [
//     //         'ALL',
//     //     ]
//     // });
//     console.log(imageFaces.response.data);
// }
// process();



put_from_url('https://www.pip.global/hubfs/PIP%20May%202018/Leadership%20New/ignacio-dibartolo.png', 'box-app-faces', 'ignacio-dibartolo.png', function(err) {
    console.log('####### 3');
    if (err) {
        console.log(err);
    } else {
        const rekognition = new AWS.Rekognition();
        const process = async() => {
            // const collection = await rekognition.createCollection('box-app-faces');
            // console.log(collection);
            // const faces = await rekognition.listFaces('box-app-faces');
            // console.log(faces);
            // const imageFaces = await rekognition.detectFaces({Bucket: 'box-app-faces', Name: 'alan1.jpg'});
            // console.log(imageFaces);
        }
        process();
    }
});