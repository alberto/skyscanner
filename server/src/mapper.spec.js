/* eslint-env jest */
import mapper from './mapper';

describe('mapper', () => {

  const source = {
    Itineraries:[{
      OutboundLegId: "OutboundLegId1",
      InboundLegId: "InboundLegId1",
      PricingOptions: [{
        Agents: ["AgentId2"],
        Price: 99,
        DeeplinkUrl: "Url"
      }],
    }],
    Legs: [
      {
        Id: "InboundLegId1",
        OriginStation: "OriginStationId1",
        DestinationStation: "DestinationStationId1",
        Departure: "Departure1",
        Arrival: "Arrival1",
        Duration: "Duration1",
        Stops: ["1_1", "1_2"],
        Carriers: ["CarrierId1", "CarrierId2"],
        Other: "other1"
      },
      {
        Id: "OutboundLegId1",
        OriginStation: "OriginStationId2",
        DestinationStation: "DestinationStationId2",
        Departure: "Departure2",
        Arrival: "Arrival2",
        Duration: "Duration2",
        Stops: [],
        Carriers: ["CarrierId3", "CarrierId2"],
        Other: "other2"
      },
    ],
    Agents: [
      {Id: "AgentId1", Name: "Agent1", Other: "other1"},
      {Id: "AgentId2", Name: "Agent2", Other: "other2"}
    ],
    Places: [
      {Id: "OriginStationId1", Code: "Place1", Other: "other1"},
      {Id: "DestinationStationId1", Code: "Place2", Other: "other2"},
      {Id: "OriginStationId2", Code: "Place3", Other: "other1"},
      {Id: "DestinationStationId2", Code: "Place4", Other: "other2"},
    ],
    Carriers: [
      {Id: "CarrierId1", Code: "Carrier1", Other: "other1"},
      {Id: "CarrierId2", Code: "Carrier2", Other: "other2"},
      {Id: "CarrierId3", Code: "Carrier3", Other: "other2"}
    ],
  };

  const mapped = {
    itineraries: [
      {
        inbound: {
          origin: {
            code: "Place1"
          },
          destination: {
            code: "Place2"
          },
          departure: "Departure1",
          arrival: "Arrival1",
          duration: "Duration1",
          stops: 2,
          carrier: {
            code: "Carrier1"
          },
        },
        outbound: {
          origin: {
            code: "Place3"
          },
          destination: {
            code: "Place4"
          },
          departure: "Departure2",
          arrival: "Arrival2",
          duration: "Duration2",
          stops: 0,
          carrier: {
            code: "Carrier3"
          },
        },
        pricing: {
          agent: {
            name: "Agent2"
          },
          price: 99,
          url: "Url"
        }
      }
    ]
  }

  it("nests response", () => {
    const result = mapper.mapAll(source);
    expect(result).toEqual(mapped);
  })
});
