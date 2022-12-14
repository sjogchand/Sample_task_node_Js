const Op = require('sequelize').Op
const db = require('../models')

const saveProperty = async (req, res) => {
  var properties_Images = req.files.property_images.map(
    (a) => 'uploads/' + a.filename.replace(/\s+/g, '-').toLowerCase(),
  )
  const propertyParams = req.body
  const checkProperty = await db.properties
    .findOne({
      where: {
        title: {
          [Op.eq]: propertyParams.title,
        },
        status: { [Op.eq]: 1 },
      },
    })
    .catch((e) => {
      console.log(e)
      res.status(422).json({ error: 'Duplicate property' }).send()
    })
  if (checkProperty)
    return res.send({ status: 422, message: 'Duplicate Property Name' })

  const PropertyData = await db.properties
    .create({
      title: propertyParams.title,
      description: propertyParams.description,
      property_image: JSON.stringify(properties_Images),
      video_url: `uploads/videos/${req.files.property_video[0].filename
        .replace(/\s+/g, '-')
        .toLowerCase()}`,
      iframe_url: propertyParams.iframe_url,
      price: propertyParams.price,
      area: propertyParams.area,
      configuration: propertyParams.configuration,
      year_built: propertyParams.year_built,
      security: propertyParams.security,
      kid_safe: propertyParams.kid_safe,
      parking: propertyParams.parking,
      top_amenities: propertyParams.top_amenities,
      amenities: propertyParams.amenities,
      address: propertyParams.address,
      city: propertyParams.city,
      country: propertyParams.country,
      status: 1,
    })
    .catch((e) => {
      console.log(e)
      res.send({ status: 200, message: "Property data couldn't save" })
    })
  res.send({
    status: 200,
    message: 'Property data saved successfully',
    json: PropertyData,
  })
}

const getPropertyById = async (req, res) => {
  const property_id = req.params.id
  const property = await db.properties
    .findOne({
      where: {
        id: {
          [Op.eq]: property_id,
        },
        status: {
          [Op.or]: {
            [Op.eq]: 1,
            [Op.is]: null,
          },
        },
      },
      attributes: [
        'id',
        'title',
        'description',
        'property_image',
        'iframe_url',
        'video_url',
        'price',
        'area',
        'configuration',
        'year_built',
        'security',
        'kid_safe',
        'parking',
        'top_amenities',
        'amenities',
        'address',
        'city',
        'country',
        'status',
        [
          db.Sequelize.fn(
            'date_format',
            db.Sequelize.col('properties.created_at'),
            '%m/%d/%Y',
          ),
          'created_at',
        ],
        [
          db.Sequelize.fn(
            'date_format',
            db.Sequelize.col('properties.updated_at'),
            '%m/%d/%Y',
          ),
          'updated_at',
        ],
      ],
    })
    .catch((e) => {
      console.log(e)
    })
  if (!property)
    return res.send({ status: 422, message: "Property doesn't Exist" })
  res.send({ status: 200, data: property })
}

const listProperty = async (req, res) => {
  const propertyList = await db.properties
    .findAll({
      where: {
        status: {
          [Op.or]: {
            [Op.eq]: 1,
            [Op.is]: null,
          },
        },
      },
      attributes: [
        'id',
        'title',
        'description',
        'property_image',
        'price',
        'area',
        'configuration',
        'year_built',
        'security',
        'kid_safe',
        'parking',
        'top_amenities',
        'amenities',
        'address',
        'city',
        'country',
        'status',
        [
          db.Sequelize.fn(
            'date_format',
            db.Sequelize.col('properties.created_at'),
            '%m/%d/%Y',
          ),
          'created_at',
        ],
        [
          db.Sequelize.fn(
            'date_format',
            db.Sequelize.col('properties.updated_at'),
            '%m/%d/%Y',
          ),
          'updated_at',
        ],
      ],
      order: [['id', 'DESC']],
    })
    .catch((e) => {
      console.log(e)
    })
  if (!propertyList.length)
    return res.json({ status: 402, message: 'No properties available' }).send()
  res.send({ status: 200, data: propertyList })
}

const updateProperty = async (req, res) => {
  var properties_Images = req.files.property_images.map(
    (a) => 'uploads/' + a.filename.replace(/\s+/g, '-').toLowerCase(),
  )
  const propertyParams = req.body
  const PropertyData = await db.properties
    .update(
      {
        title: propertyParams.title,
        description: propertyParams.description,
        property_image: JSON.stringify(properties_Images),
        video_url: `uploads/videos/${req.files.property_video[0].filename
          .replace(/\s+/g, '-')
          .toLowerCase()}`,
        iframe_url: propertyParams.iframe_url,
        price: propertyParams.price,
        area: propertyParams.area,
        configuration: propertyParams.configuration,
        year_built: propertyParams.year_built,
        security: propertyParams.security,
        kid_safe: propertyParams.kid_safe,
        parking: propertyParams.parking,
        top_amenities: propertyParams.top_amenities,
        amenities: propertyParams.amenities,
        address: propertyParams.address,
        city: propertyParams.city,
        country: propertyParams.country,
        status: 1,
      },
      {
        where: {
          id: { [Op.eq]: propertyParams.id },
        },
      },
    )
    .catch((e) => {
      console.log(e)
      res.send({ status: 402, message: "Property data couldn't save" })
    })
  res.send({
    status: 200,
    message: 'Property data saved successfully',
    json: PropertyData,
  })
}

const deleteProperty = async (req, res) => {
  const propertyParams = req.body
  await db.properties
    .update(
      { status: 0 },
      {
        where: {
          id: { [Op.eq]: propertyParams.id },
        },
      },
    )
    .catch((e) => {
      console.log(e)
    })
  res.send({ status: 200, message: 'Property deleted successfully' })
}

module.exports = {
  saveProperty,
  listProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
}
