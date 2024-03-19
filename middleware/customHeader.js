
const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'Beni') {
            next();
        } else {
            res.status(403)
        res.send({error: "api_key_no_es_correcta"});
        }
    } catch (e) {
        res.status(403)
        res.send({error: "algo_ocurrio_en_el_custom_header"});
    }
}

module.exports = customHeader