INSERT INTO client_details (client_description,reuse_refresh_tokens,allow_introspection,client_id,client_secret,access_token_validity_seconds,refresh_token_validity_seconds,client_name,logo_uri,policy_uri,clear_access_tokens_on_refresh,code_challenge_method,device_code_validity_seconds,integration_environment,created_at,updated_at,requester,revision,model_id)
VALUES (${client_description},${reuse_refresh_tokens},${allow_introspection},${client_id},${client_secret},${access_token_validity_seconds},${refresh_token_validity_seconds},${client_name},${logo_uri},${policy_uri},${clear_access_tokens_on_refresh},${code_challenge_method},${device_code_validity_seconds},${integration_environment},to_timestamp(${created_at}/1000.0),to_timestamp(${updated_at}/1000.0),${requester},${revision},${model_id})
RETURNING *
