<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Validator;
class ControllerContact extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::select(
            "fullName",
            "email",
            "subject",
            "message"
        )->get();

        return response()->json([
            "data" => $contacts,
            "message" => "All Messages",
            "succes" => true,
            201
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            "fullName" => "required|string",
            "email" => "required|string",
            "subject" => "required|string",
            "message"=>"required|string"
        ]);

        if ($validator->fails()){
            return response()->json([
                "data" => null,
                "message" => $validator->errors()->first(),
                "succes" => false,
                401
            ]);
        };

        $contact = Contact::create($input);

        return response()->json([
            "data" => $contact->whereId($contact->id)->select("fullName","email","subject","message")->first(),
            "message" => "Message Send",
            "succes" => true,
            201
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
