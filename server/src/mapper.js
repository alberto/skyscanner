const _ = require('lodash');

function mapPlaces(places) {
  return _.transform(places, (result, place) => {
    result[place.Id] = { code: place.Code };
  }, {});
}

function mapAgents(agents) {
  return _.transform(agents, (result, agent) => {
    result[agent.Id] = { name: agent.Name};
  }, {});
}

function mapCarriers(carriers) {
  return _.transform(carriers, (result, carrier) => {
    result[carrier.Id] = { code: carrier.Code };
  }, {});
}

function mapLegs(legs, places, carriers) {
  return _.transform(legs, (result, leg) => {
    result[leg.Id] = {
      origin: places[leg.OriginStation],
      destination: places[leg.DestinationStation],
      departure: leg.Departure,
      arrival: leg.Arrival,
      duration: leg.Duration,
      stops: leg.Stops.length,
      carrier: carriers[leg.Carriers[0]]
    };
  }, {});
}

function mapPricing(pricing, agents) {
  return {
    agent: agents[pricing.Agents[0]],
    price: pricing.Price,
    url: pricing.DeeplinkUrl,
  };
}

function mapItineraries(itineraries, legs, agents) {
  return itineraries.map(it => ({
    outbound: legs[it.OutboundLegId],
    inbound: legs[it.InboundLegId],
    pricing: mapPricing(it.PricingOptions[0], agents),
  }));
}

function mapAll(source) {
  const places = mapPlaces(source.Places);
  const carriers = mapCarriers(source.Carriers);
  const agents = mapAgents(source.Agents);
  const legs = mapLegs(source.Legs, places, carriers);
  const itineraries = mapItineraries(source.Itineraries, legs, agents);
  return itineraries;
}

module.exports = {
  mapPlaces,
  mapAgents,
  mapCarriers,
  mapLegs,
  mapItineraries,
  mapAll
};
