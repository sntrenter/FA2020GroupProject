import boto3
client = boto3.client(
	service_name='s3', 
	aws_access_key_id="AKIASLM7RHH4WDIPXE5K", 
	aws_secret_access_key="6bBposuAq+FeQy5+dXdIRt37ABHYLtCyjRZUtoF5"
	)

# example for upload/download
upload_file('umsl.jpg', 'cs5500fall2020', 'umsl.jpg')
download_file('cs5500fall2020', 'umsl.jpg', 'umsl_downloaded.jpg')