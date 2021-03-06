/**
 * The NetStreamMulticastInfo class specifies various Quality of Service (QoS) statistics
 * related to a NetStream object's underlying RTMFP Peer-to-Peer and IP Multicast stream transport.
 * A NetStreamMulticastInfo object is returned by the <codeph class="+ topic/ph pr-d/codeph ">NetStream.multicastInfo</codeph> property.
 * 
 *   <p class="- topic/p ">Properties that return numbers represent totals computed from the beginning of the multicast stream. 
 * These types of properties include the number of media bytes sent or the number of media fragment messages received.
 * Properties that are rates represent a snapshot of the current rate averaged over a few seconds.
 * These types of properties include the rate at which a local node is receiving data. </p><p class="- topic/p ">To see a list of values contained in the NetStreamMulticastInfo object, use the 
 * <codeph class="+ topic/ph pr-d/codeph ">NetStreamMulticastInfo.toString()</codeph> method.</p>
 * @langversion	3.0
 * @playerversion	Flash 10.1
 * @playerversion	AIR 2
 */
export class NetStreamMulticastInfo extends Object
{
	/**
	 * Specifies the number of media bytes that were proactively pushed from peers and received by the local node.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesPushedFromPeers () : number { return null; }

	/**
	 * Specifies the number of media bytes that the local node has proactively pushed to peers.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesPushedToPeers () : number{ return null; }

	/**
	 * Specifies the number of media bytes that the local node has received from IP Multicast.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesReceivedFromIPMulticast () : number{ return null; }

	/**
	 * Specifies the number of media bytes that the local node has received from the server.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesReceivedFromServer () : number{ return null; }

	/**
	 * Specifies the number of media bytes that the local node has sent to peers in response to requests from those peers for specific fragments.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesRequestedByPeers () : number{ return null; }

	/**
	 * Specifies the number of media bytes that the local node requested and received from peers.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get bytesRequestedFromPeers () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that were proactively pushed from peers and received by the local node.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsPushedFromPeers () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that the local node has proactively pushed to peers.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsPushedToPeers () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that the local node has received from IP Multicast.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsReceivedFromIPMulticast () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that the local node has received from the server.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsReceivedFromServer () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that the local node has sent to peers in response to requests from those peers for specific fragments.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsRequestedByPeers () : number{ return null; }

	/**
	 * Specifies the number of media fragment messages that the local node requested and received from peers.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get fragmentsRequestedFromPeers () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is receiving control overhead messages from peers, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get receiveControlBytesPerSecond () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is receiving media data from peers, from the server, and over IP multicast, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get receiveDataBytesPerSecond () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is receiving data from IP Multicast, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get receiveDataBytesPerSecondFromIPMulticast () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is receiving media data from the server, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get receiveDataBytesPerSecondFromServer () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is sending control overhead messages to peers and the server, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get sendControlBytesPerSecond () : number{ return null; }

	/**
	 * Specifies the rate at which the local node is sending control overhead messages to the server, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get sendControlBytesPerSecondToServer () : number{ return null; }

	/**
	 * Specifies the rate at which media data is being sent by the local node to peers, in bytes per second.
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public get sendDataBytesPerSecond () : number{ return null; }

	constructor (sendDataBytesPerSecond:number, sendControlBytesPerSecond:number, receiveDataBytesPerSecond:number, receiveControlBytesPerSecond:number, bytesPushedToPeers:number, fragmentsPushedToPeers:number, bytesRequestedByPeers:number, fragmentsRequestedByPeers:number, bytesPushedFromPeers:number, fragmentsPushedFromPeers:number, bytesRequestedFromPeers:number, fragmentsRequestedFromPeers:number, sendControlBytesPerSecondToServer:number, receiveDataBytesPerSecondFromServer:number, bytesReceivedFromServer:number, fragmentsReceivedFromServer:number, receiveDataBytesPerSecondFromIPMulticast:number, bytesReceivedFromIPMulticast:number, fragmentsReceivedFromIPMulticast:number){
		super();
	}

	/**
	 * Returns a string listing the properties of the NetStreamMulticastInfo object.
	 * @return	A string containing the values of the properties of the NetStreamMulticastInfo object
	 * @langversion	3.0
	 * @playerversion	Flash 10.1
	 * @playerversion	AIR 2
	 */
	public toString () : string{ return null; }
}