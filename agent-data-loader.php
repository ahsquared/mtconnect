<?php
$url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_SPECIAL_CHARS);
$api_url = $url;
// Initializing curl
$ch = curl_init( $api_url );
// Configuring curl options
$options = array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        'Accept: application/xml',
        'Content-type: text/plain'
    )
);
// Setting curl options
curl_setopt_array( $ch, $options );
// Getting results
$result =  curl_exec($ch); // Getting JSON result string
$curl_errno = curl_errno($ch); // store here to use later if needed
$curl_error = curl_error($ch);
$curl_http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//echo json_encode(curl_getinfo($ch));
// close cURL resource, and free up system resources
curl_close($ch);
if ($curl_errno) {
    echo json_encode(array('curl_error' => $curl_error));
} else if ($curl_http_code == "403") {
    echo json_encode(array(
        'status' => 403,
        'message' => 'Forbidden Access',
        'responseText' => $result
    ));
} else {
    echo $result;
}