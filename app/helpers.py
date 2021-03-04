from enum import unique
import boto3
import botocore
from .config import S3_KEY, S3_SECRET, S3_BUCKET, S3_LOCATION
import uuid


s3 = boto3.client(
    "s3",
    aws_access_key_id=S3_KEY,
    aws_secret_access_key=S3_SECRET
)


def upload_file_to_s3(file, bucket_name=S3_BUCKET, acl="public-read"):
    print(bucket_name, S3_KEY, S3_SECRET)
    unique_filename = uuid.uuid4().hex + ".png"
    try:
        s3.upload_fileobj(
            file,
            bucket_name,
            unique_filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something Happened: ", e)
        return e

    return "{}{}".format(S3_LOCATION, unique_filename)
