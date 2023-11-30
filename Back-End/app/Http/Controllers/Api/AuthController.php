<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    use Response;
    /**
     * register
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @method POST
     */
    public function register(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            "name" => "required|string|max:20",
            "email" => "required|string|unique:users,email",
            "password" => "required|min:8"
        ]);

        if ($validator->fails()) {
            return $this->apiResponse(null, false, $validator->errors(), 400);
        }

        $input['password'] = Hash::make($input['password']);

        $user = User::create($input);

        $token = $user->createToken($user->name)->plainTextToken;

        return $this->apiResponse($token, true, 'login is successfully.', 201);
    }

    /**
     * login
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @method POST
     */
    public function login(Request $request)
    {
        $user = User::whereEmail($request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {

            return $this->apiResponse(null, false, 'The provided credentials are incorrect.', 400);
        }

        $token = $user->createToken($user->name)->plainTextToken;

        return $this->apiResponse($token, true, 'login is successfully.', 201);
    }

    public function profile()
    {
        return $this->apiResponse(auth()->user(), true, 'successfully', 200);
    }

    public function logout()
    {
        $user = Auth::user();

        $user->tokens()->delete();

        return response()->json([
            'message' => 'You are Logouted Successfully',
            200
        ]);
    }
}
